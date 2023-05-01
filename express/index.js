const cors = require('cors')
const express = require('express')
const app = express()

global.__basedir = __dirname

let corsOptions = {
  Headers: {
    'Access-Control-Allow-Origin': '*',
  },
}

app.use(cors(corsOptions))

const initRoutes = require('./src/routes/index')

app.use(express.urlencoded({ extended: true }))
initRoutes(app)

let port = 8080
app.listen(port, () => {
  console.log(`Running at localhost:${port}`)
})
