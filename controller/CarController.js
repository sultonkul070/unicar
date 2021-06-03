const Car = require("../models/ResItms");

exports.add = (req, res) => {
  const car = new Car({
    techOperation: req.body.techOperation,
    model: req.body.model,
    typeOfCar: req.body.typeOfCar,
    yearOfMade: req.body.yearOfMade,
    engineNo: req.body.engineNo,
    bodyNo: req.body.bodyNo,
    color: req.body.color,
    fullName: req.body.fullName,
    email: req.body.email,
    dateOfBirth: req.body.dateOfBirth,
    numberOfPassport: req.body.numberOfPassport,
    address: req.body.address,
  });

  car
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
        data: car,
      });
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        data: error,
      });
    });
};
exports.getAllCar = async (req, res) => {
  const car = await Car.find();
  res.status(200).json({
    success: true,
    data: car,
  });
};
exports.getCarById = async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.status(200).json({
    success: true,
    data: car,
  });
};
exports.deleteCarById = async (req, res) => {
  await Car.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json({
    succes: true,
    gata: [],
  });
};
exports.updateCarById = async (req, res) => {
  const car = await Car.findByIdAndUpdate({ _id: req.params.id });
  car.techOperation = req.body.techOperation;
  car.model = req.body.model;
  car.typeOfCar = req.body.typeOfCar;
  car.yearOfMade = req.body.yearOfMade;
  car.engineNo = req.body.engineNo;
  car.bodyNo = req.body.bodyNo;
  car.color = req.body.color;
  car.fullName = req.body.fullName;
  car.email = req.body.email;
  car.dateOfBirth = req.body.dateOfBirth;
  car.numberOfPassport = req.body.numberOfPassport;
  car.address = req.body.address;

  car
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
        data: car,
      });
    })
    .catch((error) => {
      res.status(400).json({
        success: true,
        error,
      });
    });
};
