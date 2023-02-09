const products = require("../models/index");

module.exports.getProduct = async (req, res) => {
  try {
    const Products = await products.find({});
    return res.status(200).json({
      name: "All Products",
      Products: Products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error in getting the products",
      error: error,
    });
  }
};

module.exports.createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = new products({
      name: name,
      quantity: quantity,
    });

    await product.save();

    return res.status(200).json({
      message: "product created successfully",
      product: product,
    });
  } catch (error) {
    return res.status(500).json({
      name: "createProduct error",
      output: error,
    });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await products.findById(id);
    product.remove();
    return res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Product deleted error",
      err: error,
    });
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const id = req.body.id;
    const number = req.body.number;
    const product = await products.findById(id);

    product.quantity = product.quantity + Number(number);
    product.save();
    return res.status(200).json({
      message: "Product updated successfully",
      product: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Product update error",
      error: error,
    });
  }
};
