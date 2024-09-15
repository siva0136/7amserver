const jwt = require("jsonwebtoken");

function validateToken(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "myToken", function (e, s) {
      if (s) {
        next();
      } else {
        res.send("Invalid Token");
      }
    });
  } else {
    res.send("Token missing");
  }
}

module.exports = validateToken;
