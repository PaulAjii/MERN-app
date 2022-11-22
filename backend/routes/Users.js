const router = require('express').Router()

const {
  loginUser,
  signupUser
} = require('../controllers/Users')

// login
router.post('/login', loginUser)

// signup
router.post('/signup', signupUser)

module.exports = router