// These files contain authentication and game data routes

const express = require("express");
const authenticateToken = require("../middleware/authenticationMiddleware");
const validateRequest = require("../middleware/requestValidationMiddleware");
const errorHandler = require("../middleware/errorHandlingMiddleware");
const authController = require("../controllers/authController");
const gameController = require("../controllers/gameController");

const authRouter = express.Router();
const gameRouter = express.Router();

// Authentication routes
authRouter.post("/register", validateRequest, authController);
authRouter.post("/login", validateRequest, authController);

// Game data routes
gameRouter.post("/create", validateRequest, authenticateToken, gameController);
gameRouter.get("/:userId", authenticateToken, gameController);
gameRouter.put(
  "/:userId/:gameId",
  validateRequest,
  authenticateToken,
  gameController
);
gameRouter.delete("/:userId/:gameId", authenticateToken, gameController);

authRouter.use(errorHandler);
gameRouter.use(errorHandler);

module.exports = { authRouter, gameRouter };
