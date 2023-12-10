// This file contains game data logic

const Game = require("../models/gameModel");

async function createGame(userId, gameData) {
  const game = new Game({ userId, ...gameData });
  await game.save();
}

async function getGameData(userId) {
  const games = await Game.find({ userId });
  return games;
}

async function updateGame(userId, gameId, newData) {
  await Game.updateOne({ _id: gameId, userId }, newData);
}

async function deleteGame(userId, gameId) {
  await Game.deleteOne({ _id: gameId, userId });
}

module.exports = { createGame, getGameData, updateGame, deleteGame };
