const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")

const app = express();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("successfully connected to mongodb");
  } catch (err) {
    console.log(err);
  }
};

// middlewares
dotenv.config()
app.use(express.json())

app.use("/api/auth", authRoute)

app.listen(process.env.PORT, () => {
    connectDB()
  console.log("App is running at" + " " +process.env.PORT);
});
