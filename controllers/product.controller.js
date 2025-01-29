const Product = require("../models/product.model");

// Add a new product
const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res
      .status(201)
      .json({ message: "Product added successfully.", product: savedProduct });
  } catch (error) {
    res.status(500).json({ error: "Failed to add product." });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length !== 0) {
      res.json(products);
    } else {
      res.status(404).json({ error: "No products found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products." });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the product." });
  }
};

// Get products by category
const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    if (products.length > 0) {
      res.json(products);
    } else {
      res.status(404).json({ error: "No products found in this category." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products by category." });
  }
};

// Get products by gender
const getProductsByGender = async (req, res) => {
  try {
    const products = await Product.find({ gender: req.params.gender });
    if (products.length > 0) {
      res.json(products);
    } else {
      res.status(404).json({ error: "No products found in this gender." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products by gender." });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  getProductsByCategory,
  getProductsByGender,
};
