import cors from 'cors';
import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();

// Update CORS to allow both localhost and 127.0.0.1
const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173'];
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like from curl or Postman) or from allowed origins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// SerpAPI key from environment variables
const SERP_API_KEY = process.env.SERP_API_KEY;

if (!SERP_API_KEY) {
  console.error('Error: SERP_API_KEY is not defined.');
  process.exit(1); // Exit if API key is missing
}

app.get('/api/search', async (req, res) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ error: 'Query parameter is missing' });
  }

  try {
    const response = await axios.get(`https://serpapi.com/search.json?q=${query}&tbm=isch&api_key=${SERP_API_KEY}`);
    res.json(response.data); // Send SerpAPI response to the client
  } catch (error) {
    console.error('Error fetching data from SerpAPI:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
    res.status(500).json({ error: 'Failed to fetch data from SerpAPI' });
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});