export async function fetchCandidates(queryString: string) {
  const baseUrl = process.env.BASE_URL;
  const response = await fetch(`${baseUrl}/api/candidates?${queryString}`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const { filteredCandidates, quantityCandidates } = await response.json();

  return { filteredCandidates, quantityCandidates };
}
