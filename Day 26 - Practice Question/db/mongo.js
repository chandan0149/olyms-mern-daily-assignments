const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/skillsphere");

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});