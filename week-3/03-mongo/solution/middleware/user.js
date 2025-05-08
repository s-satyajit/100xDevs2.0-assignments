import { User } from "../models/model.js";

const authUser = (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;

  User.findOne({
    username,
    password,
  }).then((value) => {
    if (value) next();
    res.status(403).json({
      msg: `User doesn't exist`,
    });
  });
};

export default authUser;
