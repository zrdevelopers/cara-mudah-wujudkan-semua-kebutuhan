export default async function handler(req, res) {
  try {
    const domainApi = process.env.NEXT_PUBLIC_DOMAIN_API;
    const response = await fetch(domainApi + '/Api/getAreas', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    res.status(200).json(data); // Kirim data ke frontend
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
