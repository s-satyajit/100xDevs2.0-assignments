import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import adminRouter from "./router/admin.js";
import userRouter from "./router/user.js";
import connectDb from "./DB/conn.js";

dotenv.config()
const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());

connectDb();

app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
