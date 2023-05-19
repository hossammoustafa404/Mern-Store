const router = require("express").Router();
const { createOrder, getAllOrders } = require("../controllers/orders");
const authrization = require("../middlewares/authorization");

router
  .route("/")
  .post(authrization, createOrder)
  .get(authrization, getAllOrders);

module.exports = router;
