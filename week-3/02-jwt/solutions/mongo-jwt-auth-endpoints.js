import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const jwtPassword = "123456";
const app = express();
const PORT = 3000;
const MONGO_URL =
  "mongodb+srv://s-satyajit:0123456789@cluster0.3z9fdfd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
app.use(express.json());

mongoose.connect(MONGO_URL);
const User = mongoose.model("User", {
  username: String,
  password: String,
  email: String,
});

app.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  //   const userExists = User.findOne({email: email});
  const existingUser = await User.findOne({ email });

  if (existingUser) return res.status(400).send("Username already exists");

  // const user = new User({
  //     username: username,
  //     password: password,
  //     email: email,
  // })

  const user = new User({
    username,
    password,
    email,
  });

  user.save();
  res.json({
    msg: "User created successfully",
  });
});

app.listen(3000 || PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
