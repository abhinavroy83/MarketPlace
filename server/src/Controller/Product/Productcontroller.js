const Product = require("../../Models/product");

exports.getProducts = async (req, res) => {
  try {
    const { lat, lng } = req.query;
    const product = await Product.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lat), parseFloat(lng)],
          },
          $maxDistance: 1000000,
        },
      },
    });
    res.json({
      msg: "success",
      Products: product,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.postProduct = async (req, res) => {
  try {
    const { Productname, Imageurl, location } = req.body;
    const UserId = req.user.user._id;
    const product = new Product({
      Productname,
      Imageurl,
      location,
      UserId,
    });
    await product.save();
    res.json(product);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
