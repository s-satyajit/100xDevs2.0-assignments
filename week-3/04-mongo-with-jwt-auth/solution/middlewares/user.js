import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (payload.username) {
      req.username = payload.username;
      req.role = payload.role;
      next();
    }
  } catch (error) {
    res
      .status(403)
      .json({ error: `You are not authenticated, ${error.message}` });
  }
};

export default authUser;
