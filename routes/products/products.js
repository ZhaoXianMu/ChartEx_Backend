const express = require("express");
const router = express.Router();
const prodController = require("../../controllers/prods/prods");

router.get("/get", prodController.getAllProducts);
router.post("/add", prodController.addProd);

module.exports = router;
