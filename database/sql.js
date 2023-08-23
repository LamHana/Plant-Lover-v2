const sql = require("mssql");
const config = require("./config");

async function getConnection() {
  try {
    const conn = await sql.connect(config);
    return conn;
  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = getConnection;
