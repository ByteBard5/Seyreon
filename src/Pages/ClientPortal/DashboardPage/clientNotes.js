const SHEET_GET_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzJNKVRNnkgZuhHwNgVsxeekyR-0auQFEMFS5J3M3C7cW1OvKJPih4WdgjHElG8h0Cs/exec";

// ✅ Fetch existing notes for a client
export async function fetchClientNotes(clientId) {
  try {
    const url = `${SHEET_GET_ENDPOINT}?clientId=${encodeURIComponent(
      clientId
    )}`;
    const response = await fetch(url);

    const result = await response.json();

    if (result.success !== true || typeof result.notes !== "string") {
      throw new Error("Invalid response from server.");
    }

    // Split notes by newline, then separate timestamp and message
    return result.notes
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((entry) => {
        const match = entry.match(/^\[(.*?)\]\s*(.*)$/);
        return {
          timestamp: match ? match[1] : "",
          message: match ? match[2] : entry,
        };
      });
  } catch (error) {
    console.error("❌ Error fetching client notes:", error);
    return [];
  }
}

// ✅ Send new note to backend
export async function appendClientNote(clientId, noteText) {
  try {
    const response = await fetch(`/add-note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clientId, note: noteText }),
    });

    const result = await response.json();

    if (!response.ok || result.success !== true) {
      throw new Error(result.error || "Unknown error");
    }

    return true;
  } catch (error) {
    console.error("❌ Error sending note to backend:", error);
    return false;
  }
}
