export async function fetchCandidates(queryString: string) {
  const baseUrl = "http://localhost:3000";
  // значення базового url має зберігатися в .env та отримуватися = process.env.BASE_URL,
  // щоб не створювати .env тут отримано локально;

  const response = await fetch(`${baseUrl}/api/candidates?${queryString}`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const { filteredCandidates, quantityCandidates } = await response.json();

  return { filteredCandidates, quantityCandidates };
}
