const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")

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
app.use("/api/users", usersRoute)

app.listen(process.env.PORT, () => {
    connectDB()
  console.log("App is running at" + " " +process.env.PORT);
});
