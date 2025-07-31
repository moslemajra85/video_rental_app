const { bgBlue } = require("colors");
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...".bgBlue.black);
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error.message.bgRed.black);
  }
}

module.exports = connectDB;
