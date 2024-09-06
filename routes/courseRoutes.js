const express = require('express');
const { getCourses } = require('../controllers/courseController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/courses', auth, getCourses);

module.exports = router;
