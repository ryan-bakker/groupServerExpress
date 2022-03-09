const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CarsSchema = new Schema({
  firstname: String,
  lastname: String,
  review: String,
});

// singular capitalized name for the mongo collection - artists

const Car = mongoose.model("Car", CarsSchema);

module.exports = Car;
