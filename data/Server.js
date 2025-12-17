const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 8080;

app.use(cors());

const RAWG_BASE = "https://api.rawg.io/api";
const RAWG_KEY = process.env.RAWG_API_KEY;

// 게임 리스트 (실시간)
app.get("/games", async (req, res) => {
  try {
    const response = await axios.get(`${RAWG_BASE}/games`, {
      params: {
        key: RAWG_KEY,
        page_size: 20,
      },
    });

    const games = response.data.results.map(g => ({
      id: g.id,
      name: g.name,
      released: g.released,
      rating: g.rating,
      backgroundImage: g.background_image,

      // 리스트용 자동 요약
      description: `${g.name} was released on ${g.released} and received a rating of ${g.rating}.`
    }));

    res.json(games);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "RAWG fetch failed" });
  }
});

// 게임 상세
app.get("/games/:id", async (req, res) => {
  try {
    const response = await axios.get(`${RAWG_BASE}/games/${req.params.id}`, {
      params: { key: RAWG_KEY },
    });

    const g = response.data;

    res.json({
      id: g.id,
      name: g.name,
      released: g.released,
      rating: g.rating,
      backgroundImage: g.background_image,
      description_raw: g.description_raw,
    });
  } catch (err) {
    res.status(500).json({ message: "Game fetch failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
