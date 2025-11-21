import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';
import cors from 'cors'; // Add this import

const app = express();
app.use(cors()); // Add this line to enable CORS for all routes

app.get('/scrape', async (req, res) => {
  try {
    const { url } = req.query;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const titles = $('h1').map((i, el) => $(el).text()).get(); // Example: scrape h1 titles
    res.json({ titles });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => console.log('Server on 3001'));
