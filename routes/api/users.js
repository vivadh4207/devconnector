const express = require('express');
const router = express.Router();
const gravatar = require('gravatar'); // Assuming you have a gravatar package installed
const bcrypt = require('bcryptjs'); // Assuming you have bcryptjs package installed
const { check, validationResult } = require('express-validator');
const User = require('../../models/User'); // Assuming you have a User model defined    
// @route   GET api/users
// @desc    Test route  
// @access  Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
  ],
    async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
     let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      } 
       // Here you would typically handle user registration logic
    const avatar = gravatar.url(email, {
      s: '200', // Size of the avatar
      r: 'pg', // Rating    
      d: 'mm' // Default image if no gravatar is found
    })
    user = new User({
      name,
      email,
      avatar,
      password
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);  
    await user.save();
    // Return jsonwebtoken (JWT) or any other response as needed
    res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) { 
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
);

    
module.exports = router;