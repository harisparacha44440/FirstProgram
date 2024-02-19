require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/haris', (req, res) => {
  res.send('Hello Haris!')
})
app.get('/github', (req, res) => {
  res.json({
    name:"Haris",
    father:"khaliq"
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})