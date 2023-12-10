const express = require("express");
const {
  registerUser,
  comparePasswords,
  generateToken,
} = require("../services/authService");
const { getUserByUsername, createUser } = require("../models/userModel");

const router = express.Router();
/**
 * Handles the registration of a new user.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @return {Promise<void>} - A Promise representing the asynchronous execution of the function and pass response to the response interceptor.
 * @description - This function is responsible for handling the registration of a new user. It attempts to register the user by calling the registerUser function with the request body. If successful, it generates a token for the registered user using the generateToken function and sends a 200 status response with a success message. If an error occurs during the registration process, the error is logged to the console, and a 500 status response is sent with an error message.
 */
router.post("/register", async (req, res) => {
  try {
    await registerUser(req.body);
    const token = generateToken(req.body);
    res.status(200).send("User Registered Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error registering user");
  }
});

/**
 * Handles user login.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @return {Promise<void>} - A Promise representing the asynchronous execution of the function and pass response to the response interceptor.
 * @description This function is responsible for handling user login. It extracts the username and password from the request body and checks if they are present. If not, it sends a 400 status response with an "Invalid request data" message. It then attempts to retrieve a user by the provided username and checks if the user exists. If not, it sends a 401 status response with an "Invalid username or password" message. It further compares the provided password with the stored password for the user. If the passwords do not match, it sends a 401 status response with an "Invalid username or password" message. If the login is successful, it generates a token for the user and sends a 200 status response with a "Login Successful" message. In case of an error during the login process, the error is logged to the console, and a 500 status response is sent with an "Error logging in" message.
 */

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send("Invalid request data");
    }

    const user = await getUserByUsername(username);

    if (!user) {
      return res.status(401).send("Invalid username or password");
    }

    const passwordMatch = await comparePasswords(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send("Invalid username or password");
    }

    const token = generateToken(user);
    res.status(200).send("Login Successful");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error logging in");
  }
});

module.exports = router;
