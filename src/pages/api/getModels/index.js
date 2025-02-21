export const config = { 
  api: {
    bodyParser: false  // Matikan bodyParser default agar bisa menangani FormData
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Import formidable secara dinamis agar kompatibel dengan ESM
      const formidable = (await import('formidable')).default;
      
      const form = formidable();
      const [fields, files] = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          else resolve([fields, files]);
        });
      });

      // Ambil data dari fields
      const brand = fields.brand?.[0] || fields.brand;
      const vehicle_type = fields.vehicle_type?.[0] || fields.vehicle_type;

      if (!brand || !vehicle_type) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Kirim request ke API eksternal
      const domainApi = process.env.NEXT_PUBLIC_DOMAIN_API;
      const response = await fetch(domainApi + '/Api/getModels', {
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
      return res.status(200).json(data);

    } catch (error) {
      return res.status(500).json({ message: 'Error fetching data', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

