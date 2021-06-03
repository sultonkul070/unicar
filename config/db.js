"use strict";

const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    process.env.MONGODB_URL || "mongodb://localhost:27017/kursishi",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
