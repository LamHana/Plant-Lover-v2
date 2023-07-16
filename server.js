const express = require("express");
const app = express();

const indexRouter = require("./routes/index");

const sql = require("mssql");

const config = {
  user: "sa",
  password: "Ha741753963", //process.env.PASSWORD,
  server: "localhost", //process.env.DATABASE_URL, // e.g., 'localhost\\SQLEXPRESS'
  database: "PLANT_LOVER", //process.env.DATABASE_NAME,
  options: {
    trustServerCertificate: true,
  },
};

app.get("/data", async (req, res) => {
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

app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
