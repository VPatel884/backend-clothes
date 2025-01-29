const express = require("express");
const {
  addProduct,
  getAllProducts,
  getProductById,
  getProductsByCategory,
  getProductsByGender,
} = require("../controllers/product.controller");

const router = express.Router();

router.post("/", addProduct);
router.get("/", getAllProducts);
router.get("/:productId", getProductById);
router.get("/category/:category", getProductsByCategory);
router.get("/gender/:gender", getProductsByGender);

module.exports = router;
