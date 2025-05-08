import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import adminRouter from "./router/admin.js";
import userRouter from "./router/user.js";

dotenv.config()
const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
