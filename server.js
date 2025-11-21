// server.js
import express from "express";
import fetch from "node-fetch";
import * as cheerio from "cheerio";

const app = express();
const PORT = 3000;

const MENU_URL =
  "https://aromimenu.cgisaas.fi/VantaaAromieMenus/FI/Default/Vantti/Sotunkil/Page/Restaurant";

// Helper: fetch & parse
async function getTodaysFood() {
  const response = await fetch(MENU_URL);
  const html = await response.text();
  const $ = cheerio.load(html);

  // Adjust selectors based on the site’s structure
  // (You may need to inspect the page to confirm)
  const today = new Date().toLocaleDateString("fi-FI");

  const result = {
    date: today,
    meals: []
  };

  // Example selector: find a section that contains today's date
  const daySection = $(`.day:contains("${today}")`);

  daySection.find(".meal").each((_, el) => {
    result.meals.push($(el).text().trim());
  });

  return result;
}

// API ENDPOINT
app.get("/api/today", async (req, res) => {
  try {
    const menu = await getTodaysFood();
    res.json(menu);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch menu" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
