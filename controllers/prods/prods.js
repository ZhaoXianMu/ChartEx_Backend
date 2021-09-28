const Prods = require("../../models/prods/prods");
const promise = require("../../middleware/promise");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//get all products
exports.getAllProducts = promise(async (req, res) => {
  const products = await Prods.find();
  console.log( 'products =', products );
  res.json(products);
});

exports.addProd = promise(async (req, res) => {
  const prods = new Prods({ ...req.body });
  console.log( 'products =', prods );
    const saveProd = await prods.save();
    res.json({ saveProd });
});
