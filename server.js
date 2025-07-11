const express = require('express');
const connectDB = require('./config/db');

const app = express();
// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false })); 
// Test Route
app.get('/', (req, res) => res.send('API running'));

// Define Routes    
app.use('/api/profile', require('./routes/api/profiles'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
// Middleware to parse JSON bodies


const PORT = process.env.PORT || 10000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

