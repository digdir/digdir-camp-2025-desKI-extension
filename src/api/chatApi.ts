// src/api/chatApi.ts
export async function sendMessageToDeski(message: string): Promise<string> {
  const payload = {
    question: message,
    context: {
      additionalProp1: {}
    }
  };

  const response = await fetch("http://localhost:8000/servicedesk", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch response from desKI API");
  }

  const data = await response.json();


  return data.answer;
}
