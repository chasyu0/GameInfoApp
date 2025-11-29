const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(cors()); // React Native에서 CORS 문제 방지

// /games 엔드포인트
app.get("/games", (req, res) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "games.json"), "utf-8");
    const games = JSON.parse(data);
    console.log("Loaded games:", games); // 배열 길이만 확인
    res.json(games);
  } catch (error) {
    console.error("Error reading games.json:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// 특정 게임 조회
app.get("/games/:id", (req, res) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "./games.json"), "utf-8");
    const games = JSON.parse(data);
    const game = games.find(g => g.id === parseInt(req.params.id));
    if (game) {
      res.json(game);
    } else {
      res.status(404).json({ message: "Game not found" });
    }
  } catch (error) {
    console.error("Error reading games.json:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
