import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: `You are not authenticated!` });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (payload.username) {
      req.username = payload.username;
      req.role = payload.role;
      next();
    } else {
      res.status(403).json({
        msg: `You are not authenticated!`,
      });
    }
  } catch (error) {
    res.status(401).json({ error: `You are not authenticated, ${error.message}` });
  }
};

export default authAdmin;
