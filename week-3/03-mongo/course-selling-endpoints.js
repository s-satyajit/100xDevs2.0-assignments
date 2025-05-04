import express from "express";
import mongoose from "mongoose";
const app = express();
const MONGO_URL =
  "mongodb+srv://s-satyajit:mongodb+srv://s-satyajit:chikichikichiki@cluster0.3z9fdfd.mongodb.net/@cluster0.3z9fdfd.mongodb.net/";

app.use(express.json());

mongoose.connect(MONGO_URL);

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

app.post("/admin/signup", async (req, res) => {
  const { username, password } = req.body;

//   const existingAdmin = Admin.findOne({username})

//   if(existingAdmin)
//     res.status(400).json(`Admin already exists`)
  
//   const admin = new Admin({username, password})
//   await admin.save()
//   res.json({msg: `Admin created successfully.`})

// OR WE CAN ALSO WRITE IT AS

try {
    await Admin.create({username, password})
    res.json({message: `Admin created successfully`})
} catch (err) {
        res.status(500).json({message: `Admin created successfully with error: ${err}`})
}

});

app.post("")

app.listen(8080, () => {
  console.log(`Server running on port 8080`);
});
