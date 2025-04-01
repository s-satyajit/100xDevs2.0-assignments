import express from 'express'
import jwt from 'jsonwebtoken'
const jwtPassword = '123456'

const app = express();
const PORT = 3000;

app.use(express.json())

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
        password: '123321',
        name: 'Priya Kumari'
    }
];

const userExists = (username, password) => {
    // return ALL_USERS.some(user => user.username === username && user.password === password)
    let userExists = false;
    for(let i = 0; i < ALL_USERS.length; i++) {
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password)
            userExists = true;
    }
    return userExists;
}

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)) {
        res.status(403).json({
            msg: `User doesnt exist in our memory db`
        })
    }

    // const token = jwt.sign({username: username}, jwtPassword)
    const token = jwt.sign({username}, jwtPassword)
    res.json({
        token,
    })
    console.log(token)
})

app.get('/users', (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        const filteredUsers = ALL_USERS.filter(user => user.username !== username)
        res.json(filteredUsers)
        console.log(filteredUsers)
    } catch(err) {
        return res.status(403).json({
            msg: "Invalid token"
        })
    }
})

app.listen(PORT || 3000, () => {
    console.log(`Server running on port ${PORT}`)
})