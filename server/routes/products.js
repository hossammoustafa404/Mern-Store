const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteAllProducts,
} = require("../controllers/products");

const router = require("express").Router();

router
  .route("/")
  .get(getAllProducts)
  .post(createProduct)
  .delete(deleteAllProducts);
router.route("/:productId").get(getSingleProduct);

module.exports = router;
