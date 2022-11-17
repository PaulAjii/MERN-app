require('dotenv').config()
const express = require('express')

// IMPORTS
const logger = require('./middlewares/logger')
const workoutRoutes = require('./routes/Workouts')

const app = express()

// middlewares
app.use(express.json())
app.use(logger)

// Routes
app.use('/api/v1/workouts', workoutRoutes)

// listening
app.listen(process.env.PORT, () => console.log(`Server is listening on http://localhost:${ process.env.PORT }`))