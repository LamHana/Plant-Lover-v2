const express = require("express");
const app = express();

const loginRouter = require("./routes/login");

const sql = require("mssql");
require("dotenv").config();
console.log(process.env.DATABASE_URL);

const config = {
  user: "sa",
  password: `${process.env.PASSWORD}`,
  server: `${process.env.DATABASE_URL}`, // e.g., 'localhost\\SQLEXPRESS'
  database: `${process.env.DATABASE_NAME}`,
  options: {
    trustServerCertificate: true,
  },
};

app.use("/", loginRouter);

app.listen(process.env.PORT || 3000);
