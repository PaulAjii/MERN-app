require('dotenv').config()
const express = require('express')

const logger = require('./middlewares/logger')

const app = express()

// middlewares
app.use(logger)

// Routes
app.get('/', (req, res) => {
  res.status(200).json({msg: 'Welcome to the app!!!'})
})

// lidtening
app.listen(process.env.PORT, () => console.log(`Server is listening on http://localhost:${ process.env.PORT }`))