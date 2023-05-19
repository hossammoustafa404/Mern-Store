require("dotenv").config();
const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  const { authorization: authHeader } = req.headers;
  //   if(!authHeader||authHeader.startsWith("Bearer ")) {

  //   }

  const token = authHeader.split(" ")[1];
  try {
    const { userId, isAdmin } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId, isAdmin };
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = authorization;
