const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const SERP_API_KEY = import.meta.env.VITE_SERP_API_KEY // Use your actual SerpAPI key here

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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});