const mongoose = require("mongoose");
const config = require("./config");

async function connectDB() {
  try {
    await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Connected to MongoDB...`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
}

module.exports.connectDB = connectDB;
