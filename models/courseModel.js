// const mongoose = require('mongoose');

// const courseSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     duration: { type: String, required: true },
// });

// module.exports = mongoose.model('Course', courseSchema);

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  duration: String
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;