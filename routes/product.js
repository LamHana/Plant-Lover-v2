const express = require("express");
const router = express.Router();
const AccountDTO = require("../models/AccountDTO");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/", async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query("SELECT * FROM Category");
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  } finally {
    sql.close();
  }
});

module.exports = router;
