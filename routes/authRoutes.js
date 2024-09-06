const express = require('express');
const { login, signup, googleSignin } = require('../controllers/authController');
const router = express.Router();

router.post('/register', signup);
router.post('/login', login);
router.post('/google-login', googleSignin);

module.exports = router;