import express from "express";
import jwt from "jsonwebtoken";
import { Admin, Course } from "../models/models.js";
import authAdmin from "../middlewares/admin.js";
import dotenv from "dotenv";
const router = express.Router();

dotenv.config();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  await Admin.create({
    username,
    password,
  });

  res.json({
    msg: `Admin created successfully!`,
  });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({
    username,
    password,
  });
  if (!admin) {
    return res.status(401).json({ msg: `Invalid credentials!` });
  }
  const token = jwt.sign(
    { username: admin.username, role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1hr" }
  );
  res.json({ token });
});

router.post("/courses", authAdmin, async (req, res) => {
  const { title, description, imageLink, price } = req.body;

  if (req.role !== "admin") {
    res.json({ error: `Forbidden, admins only!` });
  }

  await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({ msg: `Course created successfully!` });
});

router.get("/courses", authAdmin, async (req, res) => {
  if (req.role !== "admin") {
    res.json({ error: `Forbidden, admins only!` });
  }

  const courses = await Course.find();
  res.json({ courses });
});

export default router;
