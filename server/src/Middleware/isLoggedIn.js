const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const isloggedIn = (req, res, next) => {
  try {
    const { jwttoken } = req.headers;
    const user = jwt.verify(jwttoken, process.env.JWTSECRETKEY);
    req.user = user;
    next();
  } catch (error) {
    res.json({
      status: "failed",
      msg: "you havent login",
    });
  }
};

module.exports = isloggedIn;
