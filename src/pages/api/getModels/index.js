export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { brand, vehicle_type } = req.body;

      const domainApi = process.env.NEXT_PUBLIC_DOMAIN_API;
      const response = await fetch(domainApi + '/api/getModels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ brand, vehicle_type })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Atur CORS agar bisa diakses dari mana saja
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching data', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
