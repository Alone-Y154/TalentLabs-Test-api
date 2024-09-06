const Course = require('../models/courseModel');

const courses = [
  { title: 'Course 1', duration: '2 hours' },
  { title: 'Course 2', duration: '3 hours' },
  { title: 'Course 3', duration: '1 hour' }
];

const getCourses = async (req, res) => {
  try {
    const existingCourses = await Course.find();
  
    if (existingCourses.length === 0) {
      await Course.insertMany(courses);
    }
    
    // Fetch all courses
    const allCourses = await Course.find();
    res.json(allCourses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error });
  }
};

module.exports = { getCourses };
