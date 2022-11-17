const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title must be provided"]
    },

    reps: {
        type: Number,
        required: [true, "Number of reps must be provided"]
    },

    load: {
        type: Number,
        required: true
    }
}, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Workout', workoutSchema)