/*  Contact Us Backend code, which is in the 'index.js right now
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); // <-- Load variables from .env

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Debugging middleware - logs all requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Contact form route
app.post("/send-email", async (req, res) => {
  console.log("Incoming POST /send-email with body:", req.body);

  const { name, email, phone, helpType, customHelp, budget, message } =
    req.body;

  const finalHelp =
    helpType === "Other (Type Below)" && customHelp
      ? `Other - ${customHelp}`
      : helpType;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // <-- From .env
      pass: process.env.EMAIL_PASS, // <-- From .env
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

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
}); */
