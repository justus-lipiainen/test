// server.js
import express from "express";
import fetch from "node-fetch";
import * as cheerio from "cheerio";

const app = express();
const PORT = 3000;

const MENU_URL =
  "https://aromimenu.cgisaas.fi/VantaaAromieMenus/FI/Default/Vantti/Sotunkil/Page/Restaurant";

// Fetch and parse today's menu
async function getTodaysFood() {
  const response = await fetch(MENU_URL);
  const html = await response.text();
  const $ = cheerio.load(html);

  // Aromi pages use ISO dates like: 2025-11-21
  const isoDate = new Date().toISOString().split("T")[0];

  const result = {
    date: isoDate,
    meals: []
  };

  // Most Aromi pages use data-date="YYYY-MM-DD"
  const daySection = $(`[data-date="${isoDate}"]`);

  if (!daySection.length) {
    console.warn("No section found for date:", isoDate);
    return result;
  }

  // Meal items are usually .meal-item or .mealItem
  daySection
    .find(".meal-item, .mealItem, .menu-item, .meal")
    .each((_, el) => {
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
