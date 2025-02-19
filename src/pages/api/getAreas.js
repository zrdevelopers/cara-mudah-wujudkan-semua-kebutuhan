import axios from 'axios';

export default async function handler(req, res) {
  try {
    const domainApi = process.env.NEXT_PUBLIC_DOMAIN_API;
    const response = await axios.get(`${domainApi}/Api/getAreas`);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
