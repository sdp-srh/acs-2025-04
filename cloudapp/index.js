const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())


app.get('/api', function (req, res) {
  res.send('here will be the api')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})