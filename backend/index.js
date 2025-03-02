const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")
const path = require("path")
const cookieParser = require("cookie-parser")
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const multer = require("multer")
const postsRoute = require("./routes/posts")
const commentsRoute = require("./routes/comments")
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
app.use("/images", express.static(path.join(__dirname,"/images")))
app.use(cors({origin : "http://localhost:5173" , credentials:true}))

app.use(cookieParser())
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/posts", postsRoute)
app.use("/api/comments", commentsRoute)

//Image upload

const storage = multer.diskStorage({
  destination : (req, file, fn)=>{
    fn(null, "images")
  },
  filename :(req, file, fn)=>{
    fn(null, req.body.img)
  }
})
 
const upload = multer({storage : storage})
app.get("/", (req, res)=>{
  res.send("home")
})
app.post("/api/upload", upload.single("file"), (req, res)=>{
  res.status(200).json("Image has been uploaded successfully")
})
app.listen(process.env.PORT, () => {
    connectDB()
  console.log("App is running at" + " " +process.env.PORT);
});
