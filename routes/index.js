const express = require("express");
const router = express.Router();
const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/index");

router.get("/product", getProduct);
router.post("/product/update/:id", updateProduct);
router.get("/product/delete/:id", deleteProduct);
router.post("/product/create", createProduct);

module.exports = router;
