import { Admin } from "../models/model.js";

const authAdmin = (req, res, next) => {
  const username = req.header.username;
  const password = req.header.password;

  Admin.findOne({
    username,
    password,
  }).then((value) => {
    if (value) next();
    res.status(403).json({
      msg: `User doesn't exist`,
    });
  });
};

export default authAdmin;
