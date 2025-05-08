import express from 'express'
import { Admin, Course } from '../models/model.js'
import authAdmin from '../middleware/admin.js'
const router = express.Router()

router.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username,
        password,
    })

    res.json({msg: `Admin created successfully`})
})

router.post('/courses', authAdmin, async(req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    await Course.create({
        title,
        description,
        imageLink,
        price,
    })

    res.json({msg: `Course created successfully`})
})

router.get('/courses', async(req, res) => {
    const response = await Course.find()

    res.json({
        courses: response
    })
})

export default router;