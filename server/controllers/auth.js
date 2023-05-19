const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");

// Register
const register = async (req, res) => {
  const user = await User.create(req.body);
  console.log(user);
  const token = user.createToken();
  res
    .status(StatusCodes.CREATED)
    .json({ token, user: { firstName: user.firstName } });
};

// Login
const login = async (req, res) => {
  const { username, password } = req.query;

  //   if(!username||!password) {

  //   }

  const user = await User.findOne({ username });

  //   if(!user) {

  //   }

  const passMatches = await user.comparePassword(password);

  //   if (!passMatches) {
  //   }

  const token = user.createToken();
  res.status(StatusCodes.OK).json({
    token,
    info: { firstName: user.firstName, isAdmin: user.isAdmin },
  });
};

module.exports = { register, login };