const mongoose = require('mongoose')
const Workout = require('../models/Workouts')

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getSingleWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error_message: 'Workout not found' })
  }

  try {
    const workout = await Workout.findById(id)
    
    if(!workout) {
      return res.status(404).json({ error_message: 'Workout not found' })
    }
    res.status(200).json(workout)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body

  const emptyFields = []

  if (!title) {emptyFields.push('title')}
  if (!load) {emptyFields.push('load')}
  if (!reps) {emptyFields.push('reps')}
  if (emptyFields.length > 0) {
    return res.status(400).json({
      error: 'Please fill in all fields!',
      emptyFields
    })
  }
  
  try {
    const workout = await Workout.create({ title, reps, load })
    res.status(201).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error_message: 'Workout not found' })
  }

  try {
    const workout = await Workout.findOneAndDelete({ _id: id })
    
    if(!workout) {
      return res.status(404).json({ error_message: 'Workout not found' })
    }
    res.status(200).json(workout)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error_message: 'Workout not found' })
  }

  try {
    const workoutToUpdate = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })

    if(!workoutToUpdate) {
      return res.status(400).json({ error_message: 'Workout Not Found' })
    }

    const workout = await Workout.findById(id)
    res.status(200).json(workout)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
 

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
}