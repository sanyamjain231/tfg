const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUser } = require("../models/userModel");

const saltRounds = 10;
const secretKey = "test123";

async function registerUser(user) {
  const hashedPassword = await bcrypt.hash(user.password, saltRounds);
  user.password = hashedPassword;
  await createUser(user);
}

async function comparePasswords(plainPassword, hashedPassword) {
  return bcrypt.compare(plainPassword, hashedPassword);
}

function generateToken(user) {
  return jwt.sign({ userId: user.insertId }, secretKey, { expiresIn: "1h" });
}

module.exports = { registerUser, comparePasswords, generateToken };
