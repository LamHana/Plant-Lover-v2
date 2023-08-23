const express = require("express");
const router = express.Router();
const AccountRoute = require("./account.route");

router.use("/", AccountRoute);

module.exports = router;
