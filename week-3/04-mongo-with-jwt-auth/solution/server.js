import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import adminRouter from "./routes/admin.js";
import userRouter from "./routes/user.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(bodyParser.json());

const initialize = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log(`MongoDB connected successfully`);
  } catch (e) {
    console.error(`Error connecting to database, ${error.message}`);
  } finally {
    app.use("/admin", adminRouter);
    app.use("/user", userRouter);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
};

initialize();
