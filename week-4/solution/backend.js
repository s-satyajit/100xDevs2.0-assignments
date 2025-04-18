import express from "express";
import cors from "cors";
const app = express();

app.use(cors())

app.get("/todos", (req, res) => {
  res.json({
    todos: [
      {
        id: 2,
        title: "Todo 2",
        description: "This is todo 2",
        completed: false,
      },
      {
        id: 3,
        title: "Todo 3",
        description: "This is todo 3",
        completed: false,
      },
    ],
  });
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
