const mongoose = require("mongoose");
const User = require("../Models/User");
const { Schema } = mongoose;

const prod = new mongoose.Schema({
  Productname: { type: String, required: true },
  Imageurl: { type: String, required: true },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  UserId: { type: Schema.Types.ObjectId, ref: User, required: true },
});

prod.index({ location: "2dsphere" });
const Product = mongoose.model("Product", prod);
module.exports = Product;
