const express = require("express");
const app = express();
const router = require("./routes/index.route");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var cors = require("cors");
app.use(cors());
app.use("/", router);

app.listen(process.env.PORT || 3000);
