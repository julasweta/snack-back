import express from "express";
import sequelize from "./config";
import Score from "./models/Score";

const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.post("/api/scores", async (req, res) => {
  const { name, score } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  try {
    const newScore = await Score.create({ name, score });
    res.status(201).json(newScore);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/scores", async (req, res) => {
  try {
    const scores = await Score.findAll({
      order: [["score", "DESC"]],
      limit: 10,
    });
    res.status(200).json(scores);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message });
  }
});

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
});
