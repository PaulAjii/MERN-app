const router = require('express').Router()

const {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/Workouts')

router.route('/').get(getAllWorkouts).post(createWorkout)
router.route('/:id').get(getSingleWorkout).delete(deleteWorkout).patch(updateWorkout)

module.exports = router