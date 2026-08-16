const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rohan:1912@cluster0.vxapzer.mongodb.net/?appName=Cluster0",
    );
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Connection Failed:", error.message);
  }
};

module.exports = connectDB;
