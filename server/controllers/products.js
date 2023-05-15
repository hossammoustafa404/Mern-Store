// Get all products
const getAllProducts = async (req, res) => {
  res.json({ products: [] });
};

module.exports = { getAllProducts };
