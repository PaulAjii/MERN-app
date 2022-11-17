const Workout = require('../models/Workouts')

const getAllWorkouts = (req, res) => {
  res.status(200).json({ 
    msg: 'GET all workouts' 
  })
}

const getSingleWorkout = (req, res) => {
  const { id } = req.params

  res.status(200).json({
    workout_id: id,
    msg: 'GET a single workout'
  })
}

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body
  
  try {
    const workout = await Workout.create({ title, reps, load })
    res.status(201).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteWorkout = (req, res) => {
  const { id } = req.params

  res.status(200).json({
    workout_id: id,
    msg: 'DELETE an existing workout'
  })
}

const updateWorkout = (req, res) => {
  const { id } = req.params
  const { body } = req

  res.status(200).json({
    content: body,
    msg: 'PATCH an existing workout',
    workout_id: id
  })
}
 

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
}