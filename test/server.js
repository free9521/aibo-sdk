// express
const express = require('express')

const app = express()
const port = 9000

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`)
})
