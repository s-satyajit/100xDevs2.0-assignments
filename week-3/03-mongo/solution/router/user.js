import express, { response } from "express";
import { User, Course } from "../models/model.js";
import authUser from "../middleware/user.js";
const router = express.Router();

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username,
    password,
  });

  res.json({
    msg: `User created successfully!`,
  });
});

router.get("/courses", authUser, async (req, res) => {
  const response = await Course.find();

  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", authUser, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username,
    },
    {
      $push: { purchasedCourses: courseId },
    }
  );

  res.json({
    msg: `Course purchased successfully!`,
  });
});

router.get("/purchased-courses", authUser, async (req, res) => {
  const user = await User.findOne({
    username: req.headers.username,
  });
  const course = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    courses: course,
  });
});

export default router;
