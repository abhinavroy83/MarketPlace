const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./src/Config/db");
const isloggedIn = require("./src/Middleware/isLoggedIn");
const app = express();

dotenv.config();
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,POST",
    credentials: true,
    exposedHeaders: "*",
  })
);
app.options("*", cors());

app.get("/", (req, res) => {
  res.json({
    msg: "Success",
  });
});
//Mainprofile

app.get("/admin", isloggedIn, (req, res) => {
  try {
    const user = req.user.user._id;
    // console.log(user);
    // const userID = user.user._id;
    // console.log(userID);
    res.json({
      Status: "Success",
      msg: "you haved logged success",
      user,
    });
  } catch (error) {
    res.json({
      status: "Failed",
    });
  }
});

//routes
const user = require("./src/Routes/user");
const product = require("./src/Routes/products");

app.use("/user", user);
app.use(product);

app.listen(process.env.PORT, () => {
  console.log("Running on https://localhost:3000/");
});
