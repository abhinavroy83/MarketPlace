const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to Mongodb");
  } catch (error) {
    console.log("Error during conneting to database", error);
    process.exit(1);
  }
};
 
module.exports = connectDB;
 