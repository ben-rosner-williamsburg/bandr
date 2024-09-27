import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const SERP_API_KEY = process.env.SERP_API_KEY // Use your actual SerpAPI key here

if (!SERP_API_KEY) {
  console.error('Error: SERP_API_KEY is not defined. Make sure to add it to your .env file.');
  process.exit(1); // Exit the process if the API key is missing
}

// Allow CORS
app.use(cors());

app.get('/api/search', async (req, res) => {
  const { query } = req.query; // Get search query from request
  try {
    const response = await axios.get(
      `https://serpapi.com/search.json?q=${query}&tbm=isch&api_key=${SERP_API_KEY}`
    );
    res.json(response.data); // Forward the response to the frontend
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from SerpAPI' });
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});