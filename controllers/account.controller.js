const express = require("express");
const AccountDAO = require("../models/AccountDAO");
const AccountDTO = require("../models/AccountDTO");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const API = require("../models/API");
async function checkLogin(req, res) {
  try {
    const { email, password } = req.body;
    // Validate user input
    if (!(email && password)) {
      res.status(400).json(new API(400, "All input is required", {}));
    }

    const result = await AccountDAO.checkLogin(email);

    if (
      result?.recordset.length &&
      (await bcrypt.compare(password, result?.recordset[0].password))
    ) {
      // Create token
      const token = jwt.sign(
        { user_id: result?.recordset[0].UserID, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      res
        .status(200)
        .json(new API(200, "Login successfully", { token: token }));
    } else res.status(400).json(new API(400, "Invalid Credentials", {}));
  } catch (err) {
    console.log(err);
  }
}

async function register(req, res) {
  const { email, password, userName, phoneNumber, roleID, address } = req.body;

  //validate user input
  if (!(email && password && phoneNumber && userName && roleID && address)) {
    res.status(400).json(new API(400, "All input is required", {}));
  }

  // check if user already exist
  // Validate if user exist in our database
  const result = await AccountDAO.isDuplicate(email);
  if (Object.keys(result?.recordset).length > 0) {
    return res
      .status(409)
      .json(new API(409, "User Already Exist. Please Login", {}));
  }

  encryptedPassword = await bcrypt.hash(password, 10);
  // create new account
  const account = new AccountDTO(
    null,
    userName,
    phoneNumber,
    roleID,
    address,
    false,
    email,
    encryptedPassword
  );
  const checkInsert = await AccountDAO.createNewAccount(account);
  if (checkInsert != null) {
    account.setUserID(checkInsert);
    // Create token
    const token = jwt.sign(
      { user_id: account.userID, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    //return new user
    res
      .status(201)
      .json(new API(201, "Register successfully", { token: token }));
  }
}

async function getAccounts(req, res) {
  const result = await AccountDAO.getAll();
  return res.send(result.recordset);
}

exports.getAccounts = getAccounts;
exports.checkLogin = checkLogin;
exports.register = register;
