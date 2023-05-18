const { login, register } = require("../controllers/auth");

const router = require("express").Router();

router.route("/").get(login).post(register);

module.exports = router;
