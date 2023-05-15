const { StatusCodes } = require("http-status-codes");

const notFound = (req, res) =>
  res.status(StatusCodes.NOT_FOUND).json({ msg: "The route does not exist" });

module.exports = notFound;
