const express = require("express");
const router = express.Router();
const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/index");

router.get("/", getProduct);//working watch freecodecamp article
router.post("/:id/update", updateProduct);
router.get("/:id", deleteProduct);//working watch freecodecamp article directly give Id 
router.post("/create", createProduct);//working with giving data in form-urlencoded

module.exports = router;