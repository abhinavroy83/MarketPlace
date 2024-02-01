const express = require("express");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    msg: "Success",
  });
});

app.listen(process.env.PORT, () => {
  console.log("Running on https://localhost:3000/");
});
