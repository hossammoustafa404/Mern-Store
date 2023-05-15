const { getAllProducts } = require("../controllers/products");

const router = require("express").Router();

router.route("/").get(getAllProducts).post();

module.exports = router;
