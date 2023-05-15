const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  const customError = {
    status: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong",
  };

  return res.status(customError.status).json({ msg: customError.message });
};

module.exports = errorHandlerMiddleware;
