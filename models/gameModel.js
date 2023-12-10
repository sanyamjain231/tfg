const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  // Add other game-related fields as needed
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
