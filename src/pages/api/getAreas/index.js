export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Kirim request ke API eksternal
      const domainApi = process.env.NEXT_PUBLIC_DOMAIN_API;
      const response = await fetch(`${domainApi}/Api/getAreas`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return res.status(200).json(data);

    } catch (error) {
      return res.status(500).json({ message: 'Error fetching data', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

