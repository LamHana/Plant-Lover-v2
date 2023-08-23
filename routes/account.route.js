const { Router } = require("express");
const AccountController = require("../controllers/account.controller");

const AccountRoute = Router();
AccountRoute.post("/login", AccountController.checkLogin);
AccountRoute.get("/get-all", AccountController.getAccounts);
AccountRoute.post("/register", AccountController.register);

module.exports = AccountRoute;
