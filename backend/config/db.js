const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://buildwiseDB:buildwiseDB%40123@ac-vbu7b5x-shard-00-00.ehc5nvi.mongodb.net:27017,ac-vbu7b5x-shard-00-01.ehc5nvi.mongodb.net:27017,ac-vbu7b5x-shard-00-02.ehc5nvi.mongodb.net:27017/buildwiseDB?ssl=true&replicaSet=atlas-bc6uqa-shard-0&authSource=admin&retryWrites=true&w=majority"
    );

    console.log("MongoDB Connected 🔥");
  } catch (error) {
    console.log("MongoDB Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;