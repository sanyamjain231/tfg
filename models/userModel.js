const { mysqlConnection } = require("../config/dbConfig");

/**
 * Creates a new user in the database.
 *
 * @param {Object} user - The user object containing username, email, and password.
 * @return {Promise<Object>} - A Promise representing the asynchronous execution of the function. If successful, resolves with the results of the database insertion.
 * @reject {Error} - If an error occurs during the database insertion, the Promise is rejected with the error.
 * @description This function takes a user object with username, email, and password properties and inserts a new record into the 'users' table in the database.If the insertion is successful, the Promise resolves with the results of the database operation. If an error occurs during the insertion, the Promise is rejected with the error.
 */

function createUser(user) {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    const values = [user.username, user.email, user.password];

    mysqlConnection.query(query, values, (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });
}

/**
 * Retrieves a user from the database based on the provided username.
 *
 * @param {string} username - The username to look up in the database.
 * @return {Promise<Object|null>} - A Promise representing the asynchronous execution of the function. If successful, resolves with the user object retrieved from the database. If no user is found, resolves with null.
 * @reject {Error} - If an error occurs during the database query, the Promise is rejected with the error.
 * @description This function takes a username as a parameter and queries the 'users' table in the database to retrieve the user with the specified username. If a user is found, the Promise resolves with the user object. If no user is found, the Promise resolves with null. If an error occurs during the database query, the Promise is rejected with the error.
 */
function getUserByUsername(username) {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users WHERE username = ?";
    const values = [username];

    mysqlConnection.query(query, values, (error, results) => {
      if (error) reject(error);
      resolve(results[0]); // Assuming username is unique, so we return the first result
    });
  });
}

module.exports = { getUserByUsername, createUser };
