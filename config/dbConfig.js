const mysql = require("mysql2");
const mongoose = require("mongoose");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "user_database",
});

mysqlConnection.connect();

// mongoose.connect("mongodb://localhost:3310/game_database", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

module.exports = { mysqlConnection, mongoose };
