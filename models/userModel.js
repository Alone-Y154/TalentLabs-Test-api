// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

// module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  googleLogin: { type: Boolean, default: false },
  password: { type: String },  // Not required if using Google login
  googleId: { type: String }   // Google ID should be a string, not false
});

// Middleware to validate the schema before saving
userSchema.pre('save', function (next) {
  // If the user is not logging in via Google, a password is required
  if (!this.googleLogin && !this.password) {
    return next(new Error('Password is required for non-Google login users.'));
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
