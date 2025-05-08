import { Admin } from "../models/model.js";

const authAdmin = (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;

  Admin.findOne({
    username,
    password,
  }).then((value) => {
    if (value) next();
    else {
      res.status(403).json({
        msg: `Admin doesn't exist`,
      });
    }
  });
};

export default authAdmin;
