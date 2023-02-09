const express = require("express");
const router = express.Router();
// importing the controller methods
const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/index");

router.get("/", getProduct); //to get all products
router.post("/update", updateProduct); //to update one product
router.delete("/:id", deleteProduct); //to delete one product
router.post("/create", createProduct); //to create one product

module.exports = router;
