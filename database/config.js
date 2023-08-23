require("dotenv").config();

const config = {
  user: "sa",
  password: `${process.env.PASSWORD}`,
  server: `${process.env.DATABASE_URL}`, // e.g., 'localhost\\SQLEXPRESS'
  database: `${process.env.DATABASE_NAME}`,
  options: {
    trustServerCertificate: true,
  },
};
module.exports = config;
