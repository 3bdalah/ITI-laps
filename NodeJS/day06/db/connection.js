// Import the Mongoose library
import mongoose from "mongoose";

// Define a function to establish a MongoDB connection
const connectionApp = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/trello");
};

// Export the connection function for use in other parts of your application
export default connectionApp;
