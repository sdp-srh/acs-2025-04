const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())


app.get('/', function (req, res) {
  res.send(`
    <h1>Hello ACS Course</h1>
    <p>My first Express app!</p>
    <p>and running on Google Cloud Platform (02.04.2025)</p>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})