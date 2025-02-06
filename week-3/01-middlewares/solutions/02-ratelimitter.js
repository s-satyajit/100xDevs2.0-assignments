import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

let numberOfRequestsForUser = {};

const rateLimitter = (req, res, next) => {
  const userId = req.headers["user-id"];

  if (!userId) return res.status(400).json({ msg: "User ID is required" });

  if (!numberOfRequestsForUser[userId]) numberOfRequestsForUser[userId] = 0;

  numberOfRequestsForUser[userId]++;

  if (numberOfRequestsForUser[userId] > 5) {
    return res.status(404).json({});
  }

  next();
};

app.use(rateLimitter);

app.get("/user", (req, res) => {
  res.status(200).json({ name: "john" });
});

app.post("/user", (req, res) => {
  res.status(200).json({ msg: "created dummy user" });
});

setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
