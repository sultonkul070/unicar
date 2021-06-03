const express = require("express");
const cors = require("cors");
const app = express();
const carRoute = require("./routes/CarRoute");

const bodyparser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

app.use(cors());
app.use(bodyparser.json());

app.use("/car", carRoute);

const port = process.env.PORT || 4000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.listen(port, () => {
  console.log(`Server ${port} da ishga tushdi`);
});
