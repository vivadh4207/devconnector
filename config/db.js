const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Use the new URL parser and unified topology
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};
module.exports = connectDB;
// This code connects to a MongoDB database using Mongoose.
// It retrieves the connection string from a configuration file and handles connection errors.
// The connection is established with options to use the new URL parser and unified topology.
// If the connection is successful, it logs a success message; otherwise, it logs the error and exits the process with a failure status.
// The connectDB function is exported for use in other parts of the application, allowing for easy database connection management.
// The connection string is stored in a configuration file, making it easy to change without modifying the code.
// The use of async/await syntax allows for cleaner asynchronous code, making it easier to read and maintain.
// The code is designed to be used in a Node.js application, typically in the server        startup process.
// to ensure the database is connected before handling requests.
// This is a common pattern in Node.js applications that use MongoDB, providing a robust way
// to manage database connections and handle potential errors gracefully.
// The code is modular, allowing for easy integration into larger applications and promoting code reuse.                                