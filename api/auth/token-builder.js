const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "top secret string";

function tokenBuilder(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
  };
  const options = {
    expiresIn: "1d",
  };
  const token = jwt.sign(payload, JWT_SECRET, options);

  return token;
}

module.exports = tokenBuilder;
