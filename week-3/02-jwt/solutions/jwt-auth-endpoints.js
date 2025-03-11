import express from 'express'
import jwt from 'jsonwebtoken'
const jwtPassword = '123456'

const app = express()

const ALL_USERS = [
    {
        username: 'harkirat@gmail.com',
        password: '123',
        name: 'harkirat singh'
    },
    {
        username: 'raman@gmail.com',
        password: '123321',
        name: 'Raman Singh'
    },
    {
        username: 'priya@gmail.com',
        password: 123321,
        name: 'Priya Kumari'
    }
];

const userExists = (username, password) => {
    if(username == ALL_USERS.username && password == ALL_USERS.password)
        return true;
    return false
}

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exist in our memory db,"
        })
    }
})