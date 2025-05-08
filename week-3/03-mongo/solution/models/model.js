import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
})

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    purchasedCourses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Course',
    }]
})

const CourseSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    imageLink: {type: String, required: true},
    price: {type: Number, required: true}
})

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema)

export {Admin, User, Course}