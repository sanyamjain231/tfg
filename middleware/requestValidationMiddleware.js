function validateRequest(req, res, next) {
  // Implement request validation logic here
  if (!req.body.username || !req.body.password) {
    return res.status(400).send("Invalid request data");
  }
  next();
}

module.exports = validateRequest;
