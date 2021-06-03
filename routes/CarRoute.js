const express = require("express");
const routercar = express.Router();
const {
  add,
  getAllCar,
  getCarById,
  deleteCarById,
  updateCarById,
} = require("../controller/CarController");

routercar.post("/add", add);
routercar.get("/all", getAllCar);
routercar.get("/:id", getCarById);
routercar.delete("/:id", deleteCarById);
routercar.put("/:id", updateCarById);

module.exports = routercar;
