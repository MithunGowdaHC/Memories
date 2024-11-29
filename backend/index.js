const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()


const app = express();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("successfully connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};
const PORT = 5000;
app.listen(PORT, () => {
    connectDB()
  console.log(`App is running at ${PORT}`);
});
