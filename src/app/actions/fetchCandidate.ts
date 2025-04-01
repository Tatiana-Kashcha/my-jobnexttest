export async function fetchCandidate(slug: string) {
  // const baseUrl = "http://localhost:3000";
  // значення базового url має зберігатися в .env та отримуватися = process.env.BASE_URL,
  // щоб не створювати .env тут отримано локально;

  const baseUrl = process.env.BASE_URL;
  const response = await fetch(`${baseUrl}/api/candidates/${slug}`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
