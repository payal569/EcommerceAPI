const router = require("express").Router();
const product = require("../models/Product");

// GET ALL PRODUCT
// http://localhost:5000/ecommerce/product
router.get("/product", async (req, res) => {
  try {
    const data = await product.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});


// CREATE PRODUCT
// http://localhost:5000/ecommerce/product/create
router.post("/product/create", async (req, res) => {
  const newProduct = new product({
    name: req.body.name,
    quantity: req.body.quantity,
  });
  try {
    const savedProduct = await newProduct.save();
    console.log(savedProduct);
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json(error);
  }
});


// UPDATE PRODUCT
// http://localhost:5000/ecommerce/product/:id
router.put("/product/:id", async (req, res) => {
  req.body.quantity = req.body.quantity;
  try {
    const updateProduct = await product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});


// DELETE PRODUCT 
// http://localhost:5000/ecommerce/product/:id
router.delete("/product/:id", async (req, res) => {
  try {
    await product.findByIdAndDelete(req.params.id);
    res.status(200).json("product deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
