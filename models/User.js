const   mongoose = require('mongoose');
const   UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    // Add any additional fields you need for the user model
    // For example, you might want to add fields for user roles, status, etc.
});     
module.exports = mongoose.model('user', UserSchema);
// This code defines a Mongoose schema for a User model, which includes fields for name,
// email, password, avatar, and date. The name, email, and password fields are required, and the email field must be unique.
// The date field defaults to the current date and time.
// The User model is then exported for use in other parts of the application.               