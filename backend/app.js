require('dotenv').config()
const express = require('express')
const cors = require('cors')

// IMPORTS
const logger = require('./middlewares/logger')
const workoutRoutes = require('./routes/Workouts')
const userRoutes = require('./routes/Users')
const connectDB = require('./db/connect')

const app = express()

// middlewares
app.use(express.json())
app.use(cors())
app.use(logger)

// Routes
app.use('/api/v1/workouts', workoutRoutes)
app.use('/api/v1/users', userRoutes)

// listening
const start = async () => {
  try {
    await connectDB(process.env.DB_URI)
    console.log('Connected to Database Sucessfully!')
    app.listen(process.env.PORT, () => console.log(`Server is listening on http://localhost:${ process.env.PORT }`))
  } catch(err) {
    console.log(err)
  }
}

start()