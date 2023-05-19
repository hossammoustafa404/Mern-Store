const { StatusCodes } = require("http-status-codes");
const Order = require("../models/Order");

// Create Order
const createOrder = async (req, res) => {
  const { userId } = req.user;
  console.log(userId);
  const order = await Order.create({ userId, shippingInfo: req.body });
  res.status(StatusCodes.CREATED).json({ order });
};

// Get all orders
const getAllOrders = async (req, res) => {
  const { userId, isAdmin } = req.user;
  const queryObj = {};

  if (!isAdmin) {
    queryObj.userId = userId;
  }
  const orders = await Order.find(queryObj);

  res.status(StatusCodes.OK).json({ nbhits: orders.length, orders });
};

module.exports = { createOrder, getAllOrders };
