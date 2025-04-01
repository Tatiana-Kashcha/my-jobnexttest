export async function fetchCandidate(slug: string) {
  const baseUrl = process.env.BASE_URL;
  const response = await fetch(`${baseUrl}/api/candidates/${slug}`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
