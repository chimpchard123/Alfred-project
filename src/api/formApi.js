const API_BASE_URL = "http://localhost:5001/server.js"; 


export async function getThreads() {
  const response = await fetch(`${API_BASE_URL}/threads`);
  if (!response.ok) throw new Error("Failed to fetch threads");
  return response.json();
}


export async function createThread(title, content) {
  const response = await fetch(`${API_BASE_URL}/threads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  });
  if (!response.ok) throw new Error("Failed to create thread");
  return response.json();
}
