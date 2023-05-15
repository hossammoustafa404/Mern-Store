const {
  createProduct,
  getAllProducts,
  getSingleProduct,
} = require("../controllers/products");

const router = require("express").Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:productId").get(getSingleProduct);

module.exports = router;
