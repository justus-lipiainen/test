// server.js
import express from "express";
import fetch from "node-fetch";
import * as cheerio from "cheerio";

const app = express();
const PORT = 3000;

const MENU_URL =
  "https://aromimenu.cgisaas.fi/VantaaAromieMenus/FI/Default/Vantti/Sotunkil/Page/Restaurant";

async function getTodaysFood() {
  const response = await fetch(MENU_URL);
  const html = await response.text();
  const $ = cheerio.load(html);

  const result = {
    date: new Date().toISOString().split("T")[0],
    meals: []
  };

  // Find all dish name elements
  $("aromi-label#lbl_dishname mat-label").each((_, el) => {
    const text = $(el).text().trim();
    if (text.length > 0) {
      result.meals.push(text);
    }
  });

  return result;
}

// API endpoint
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
