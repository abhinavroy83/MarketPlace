const express = require("express");
const router = express.Router();
const productcontroller = require("../Controller/Product/Productcontroller");
const isLoggedIn = require("../Middleware/isLoggedIn");

router.post("/api/postProduct", isLoggedIn, productcontroller.postProduct);
router.get("/api/getProducts", productcontroller.getProducts);

module.exports = router;
