import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Products from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";
import Product from "./models/productModel.js";
dotenv.config();
connectDB();
const importData = async () => {
  try {
    await Order.deleteMany();
    await Products.deleteMany();
    await User.deleteMany();
    const createdUser = await User.insertMany(users);
    const amdinUser = createdUser[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: amdinUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Products.deleteMany();
    await User.deleteMany();
    console.log("Data Destroyed!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
