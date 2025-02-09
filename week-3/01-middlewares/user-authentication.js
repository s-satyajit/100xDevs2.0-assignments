import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

let users = [];

const dummyUser = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const userExists = users.some(
    (u) => u.username === username && u.password === password
  );
  if (userExists) return res.status(400).send(`User already exists`);
  users.push({ username, password });
  res.status(201).send(`User registered`);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    // req.session = { user: username };
    res.status(200).send(dummyUser);
  } else {
    res.status(404).send(`Error`);
  }
});

// const isAuthenticated = (req, res, next) => {
//   if (req.session && req.session.user) next();
//   else res.status(401).send(`You are not authenticated`);
// };

// app.get(`/people`, isAuthenticated, (req, res) => {
//   res.json(dummyUser);
// });

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
