import express from 'express'
const app = express()

let requestCount = 0;

const serverCount = (req, res, next) => {
  requestCount++
  console.log(requestCount)
  next()
}

app.use(serverCount)

app.get('/user' ,(req, res) => {
  res.status(200).json({name: 'john'})
})

app.post('/user', (req, res) => {
  res.status(200).json({msg: 'created by dummy user'})
})

app.get('/requestCount', (req, res) => {
  res.status(200).json({requestCount})
})

app.listen(3000, () => {
  console.log(`Server is running on port 3000`)
})