import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
import authUser from "../middlewares/user.js";
import { Course, User } from "../models/models.js";
const router = express.Router();

dotenv.config();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  await User.create({
    username,
    password,
  });
  res.json({
    msg: `User created successfully!`,
  });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    username,
    password,
  });
  if (!user) {
    res.status(403).json({ error: `Invalid credentials!` });
  }
  const token = jwt.sign(
    { username: user.username, role: "user" },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  res.json({ token });
});

router.get("/courses", authUser, async (req, res) => {
  if (req.role !== "user") {
    res.status(403).json({ error: `Forbidden, users only!` });
  }
  const courses = await Course.find();
  res.json({ courses });
});

router.post("/courses/:courseId", authUser, async (req, res) => {
  const { courseId } = req.params;
  if (req.role !== "user") {
    res.status(403).json({ error: `Forbidden, users only!` });
  }

  await User.updateOne(
    { username: req.username },
    { $push: { purchasedCourses: courseId } }
  );
  res.json({ msg: `Course purchased successfully!` });
});

router.get("/purchased-courses", authUser, async (req, res) => {
  if (req.role !== "user") {
    res.status(403).json({ error: `Forbidden, users only!` });
  }

  const user = await User.findOne({ username: req.username });
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({ courses });
});

export default router;
