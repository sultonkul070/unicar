const mongoose = require("mongoose");

const ResSchema = new mongoose.Schema({
  //id:{ type:Number, required:true},
  techOperation: { type: String, required: true },
  model: { type: String, required: true },
  typeOfCar: { type: String, required: true },
  yearOfMade: { type: String, required: true },
  engineNo: { type: String, required: true, unique: true },
  bodyNo: { type: String, required: true },
  color: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  numberOfPassport: { type: String, required: true },
  address: { type: String, default: "Нет" },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Dbresult", ResSchema);
