const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const { google } = require("googleapis");

console.log("📂 Loaded EMAIL_USER:", process.env.EMAIL_USER); // 👈 Debug log
console.log("📂 Loaded GOOGLE_PROJECT_ID:", process.env.GOOGLE_PROJECT_ID); //Added for .env

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Debugging middleware – log every incoming request
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ✅ Health check
app.get("/test", (req, res) => {
  res.json({ success: true, message: "Backend is working!" });
});

// ------------------ CONTACT FORM ------------------
app.post("/send-email", async (req, res) => {
  console.log("📩 Incoming POST /send-email with body:", req.body);

  const { name, email, phone, helpType, customHelp, budget, message } =
    req.body;

  const finalHelp =
    helpType === "Other (Type Below)" && customHelp
      ? `Other - ${customHelp}`
      : helpType;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    text: `
You received a new inquiry from your website:

Name: ${name}
Email: ${email}
Phone: ${phone}
Help Needed With: ${finalHelp}
Estimated Budget: ${budget}

Additional Message:
${message || "(No additional message)"}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!");
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return res.status(500).json({ success: false, error: "Email failed" });
  }
});

// ------------------ CLIENT NOTES ------------------
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
  projectId: process.env.GOOGLE_PROJECT_ID,
  //keyFile: "service-account.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const SPREADSHEET_ID = "1CGq1vtArLhPXJFcblL-V9z-hfyq6zThJ2iWSASOFzgY";
const SHEET_NAME = "Client Portal";

// Format time like: [26 Jul 2025, 08:45 PM]
function getFormattedTimestamp() {
  const now = new Date();
  return `[${now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })}, ${now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })}]`;
}

console.log(">>> Registering POST /add-note route");

app.post("/add-note", async (req, res) => {
  console.log("🔥 Received request at /add-note");
  console.log("📩 Request body:", req.body);

  try {
    const { clientId, note } = req.body;

    if (!clientId || !note) {
      return res
        .status(400)
        .json({ success: false, error: "Missing clientId or note" });
    }

    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: authClient });

    // Read the entire sheet
    const getResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: SHEET_NAME,
    });

    const rows = getResponse.data.values;
    const header = rows[0];
    const clientIdIndex = header.indexOf("Client ID");
    const noteColIndex = header.indexOf("Note from Client");
    const statusColIndex = header.indexOf("New Request");

    let rowToUpdate = -1;

    for (let i = 1; i < rows.length; i++) {
      if (
        (rows[i][clientIdIndex] || "").trim().toLowerCase() ===
        clientId.trim().toLowerCase()
      ) {
        rowToUpdate = i + 1;
        break;
      }
    }

    if (rowToUpdate === -1) {
      return res
        .status(404)
        .json({ success: false, error: "Client ID not found" });
    }

    const currentNotes = rows[rowToUpdate - 1][noteColIndex] || "";
    const timestamp = getFormattedTimestamp();
    const newNote = `${timestamp} ${note}`;
    const updatedNotes = currentNotes ? `${currentNotes}\n${newNote}` : newNote;

    const updates = [
      {
        range: `${SHEET_NAME}!${String.fromCharCode(
          65 + noteColIndex
        )}${rowToUpdate}`,
        values: [[updatedNotes]],
      },
    ];

    const currentStatus = rows[rowToUpdate - 1][statusColIndex];
    if (!currentStatus || currentStatus.toLowerCase() === "no") {
      updates.push({
        range: `${SHEET_NAME}!${String.fromCharCode(
          65 + statusColIndex
        )}${rowToUpdate}`,
        values: [["Received"]],
      });
    }

    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        valueInputOption: "USER_ENTERED",
        data: updates,
      },
    });

    console.log("✅ Note successfully added to sheet");
    return res.json({ success: true, message: "Note added" });
  } catch (err) {
    console.error("❌ Error in /add-note:", err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ------------------ START SERVER ------------------
app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
  console.log(
    "📌 Available routes: GET /test, POST /send-email, POST /add-note"
  );
});
