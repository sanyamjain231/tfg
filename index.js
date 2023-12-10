// This is the entry point of your application

const express = require("express");
const bodyParser = require("body-parser");
const { authRouter } = require("./routes/authRoutes");
const { gameRouter } = require("./routes/gameRoutes");
const errorHandler = require("./middleware/errorHandlingMiddleware");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/game", gameRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
