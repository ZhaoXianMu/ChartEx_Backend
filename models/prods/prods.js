const mongoose = require("mongoose");

//create schema
const prodSchema = new mongoose.Schema({
  ProductName: {
    type: String,
    required: true,
    minlength: 1,
  },
  CategoryName: {
    type: String,
    required: true,
    minlength: 1,
  },
  Price: {
    type: String,
    minlength: 1,
    required: true,
  },
  Stock: {
    type: String,
    minlength: 1,
    required: true,
  }
});

//some validation

module.exports = Prods = mongoose.model("prods", prodSchema);
