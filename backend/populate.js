require('dotenv').config()

const connectDB = require('./db/connect')
const Workout = require('./models/Workouts')

const jsonWorkouts = require('./workouts.json')

const start = async () => {
    try {
        await connectDB(process.env.DB_URI)
        await Workout.deleteMany()
        await Workout.create(jsonWorkouts)
        process.exit(0)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

start()