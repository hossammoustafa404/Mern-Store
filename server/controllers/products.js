const { StatusCodes } = require("http-status-codes");
const Product = require("../models/Product");

// Create product
const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

// Get all products
const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};

// Get single product
const getSingleProduct = async (req, res) => {
  const { productId } = req.params;

  const product = await Product.findOne({ _id: productId });

  res.status(StatusCodes.OK).json({ product });
};

// Delete all products --for testing
const deleteAllProducts = async (req, res) => {
  await Product.deleteMany({});

  res.send();
};
module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteAllProducts,
};
