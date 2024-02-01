const User = require("../../Models/User");
const bcrypt = require("bcrypt");
const jwttoken = require("jsonwebtoken");

const Signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const ecryptpass = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: ecryptpass });
    await newUser.save();
    res.json({
      status: "Success",
      msg: "Successfully signup",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "failed",
    });
  }
};

module.exports = Signup;
