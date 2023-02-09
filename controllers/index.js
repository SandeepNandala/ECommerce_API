const products = require("../models/index");

// function to get all products from database
module.exports.getProduct = async (req, res) => {
  try {
    // retrieving the all the products from database
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

//fuction to create a product in database
module.exports.createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    // creating a product in database
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
    return res.status(400).json({
      name: "createProduct error",
      output: error,
    });
  }
};

// function to delete a product from database
module.exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await products.findById(id);
    product.remove();//deleting a product in database
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

// function to update a product in database
module.exports.updateProduct = async (req, res) => {
  try {
    const id = req.body.id;
    const number = req.body.number;
    const product = await products.findById(id);
  //  updating the product in database
    product.quantity = product.quantity + Number(number);
    product.save();
    return res.status(200).json({
      message: "Product updated successfully",
      product: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Product update error",
      error: error,
    });
  }
};
