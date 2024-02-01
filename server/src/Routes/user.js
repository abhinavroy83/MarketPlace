const express = require("express");
const router = express.Router();
const Signup = require("../Controller/User/Signup");
const login = require("../Controller/User/Login");

router.post("/signup", Signup);
router.post("/login", login);

module.exports = router;
