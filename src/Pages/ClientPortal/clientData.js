// src/pages/ClientPortal/clientData.js

export async function checkClientLogin(clientId, credential) {
  try {
    const formData = new FormData();
    formData.append("clientId", clientId);
    formData.append("credential", credential);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxxc87yb2ZKX51PDVNGvdegIk23A7L1EmNx0y6v7EodF5IbmX7_bbnRHbzGVzzQ63wY/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data && data["Client ID"] ? data : null;
  } catch (error) {
    console.error("Login request failed:", error);
    return null;
  }
}
