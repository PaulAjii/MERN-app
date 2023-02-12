const router = require('express').Router()

const requireAuth = require("../middlewares/requireAuth")

const {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/Workouts')

router.use(requireAuth)

router.route('/').get(getAllWorkouts).post(createWorkout)
router.route('/:id').get(getSingleWorkout).delete(deleteWorkout).patch(updateWorkout)

module.exports = router