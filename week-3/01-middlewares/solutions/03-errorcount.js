import express from 'express'
const app = express()

const PORT = process.env.PORT || 3000;

let errorCount = 0;

app.get('/user', (req, res) => {
    throw new Error("User not found")
    res.status(200).json({name: 'john'})
})

app.post('/user', (req, res) => {
    res.status(200).json({msg: 'created dummy user'})
})

app.get('/errorCount', (req, res) => {
    res.status(200).json({errorCount})
})

app.use((error, req, res, next) => {
    errorCount++
    res.status(404).send(`Resource not found`)
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})