const express = require("express");
const {
  createGame,
  getGameData,
  updateGame,
  deleteGame,
} = require("../services/gameService");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const userId = req.user.userId; // Assuming userId is present in the decoded token

    await createGame(userId, req.body);
    res.status(201).send("Game created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating game");
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const games = await getGameData(userId);
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching game data");
  }
});

router.put("/:userId/:gameId", async (req, res) => {
  try {
    const userId = req.params.userId;

    await updateGame(userId, req.params.gameId, req.body);
    res.send("Game updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating game");
  }
});

router.delete("/:userId/:gameId", async (req, res) => {
  try {
    const userId = req.params.userId;
    await deleteGame(userId, req.params.gameId);
    res.send("Game deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting game");
  }
});

module.exports = router;
