const express = require("express");
const router = express.Router();
// const {
//   getProduct,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// } = require("../controllers/index");

router.use('/products',require('./products'));

// router.get("/products", getProduct);
// router.post("/products/:id/update", updateProduct);
// router.get("/products/:id", deleteProduct);
// router.post("/products/create", createProduct);

module.exports = router;
