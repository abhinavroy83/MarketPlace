const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./src/Config/db");
const isloggedIn = require("./src/Middleware/isLoggedIn");
const app = express();

dotenv.config();

connectDB();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    msg: "Success",
  });
});
//Mainprofile

app.get("/admin", isloggedIn, (req, res) => {
  try {
    const user = req.user;
    // console.log(user);
    const userID = user.user._id;
    // console.log(userID);
    res.json({
      Status: "Success",
      msg: "you haved logged success",
      userID,
    });
  } catch (error) {}
});

//routes
const user = require("./src/Routes/user");
app.use("/user", user);

app.listen(process.env.PORT, () => {
  console.log("Running on https://localhost:3000/");
});
