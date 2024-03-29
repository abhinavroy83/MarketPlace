const User = require("../../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.json({
        status: "failed",
        msg: "user not find",
      });
    }
    let passwordmtch = await bcrypt.compare(password, user.password);
    if (passwordmtch) {
      const jwttoken = jwt.sign(
        { user: user.toJSON() },
        process.env.JWTSECRETKEY,
        {
          expiresIn: "30m",
        }
      );
      console.log(user);
      res.json({
        status: "success",
        msg: "LoggedIN sucess",
        jwttoken,
        data: user,
      });
    } else {
      res.json({
        msg: "you have entered incorrect password",
      });
    }
  } catch (error) {
    console.log("Error during login");
    res.json({
      status: "failed",
    });
  }
};

module.exports = login;
