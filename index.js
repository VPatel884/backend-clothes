const express = require("express");
const cors = require("cors");
const { initializeDatabase } = require("./db/db.connect");
// const Product = require("./models/product.model");
const productRoutes = require("./routes/product.routes");
const userRoutes = require("./routes/user.routes");
const app = express();

app.use(express.json());
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

initializeDatabase();

app.use(express.json());

app.use("/products", productRoutes);
app.use("/user", userRoutes);

// const addProduct = async (newProduct) => {
//   try {
//     const product = new Product(newProduct);
//     const saveProduct = await product.save();
//     return saveProduct;
//   } catch (error) {
//     console.error("Error while adding product", error);
//   }
// };

// app.post("/products", async (req, res) => {
//   try {
//     const savedProduct = await addProduct(req.body);

//     res
//       .status(201)
//       .json({ message: "Product added successfully.", product: savedProduct });
//   } catch {
//     res.status(500).json({ error: "Failed to add product." });
//   }
// });

// const getAllProducts = async () => {
//   try {
//     const allProducts = await Product.find();
//     return allProducts;
//   } catch (error) {
//     console.error("Error fetching the products", error);
//   }
// };

// app.get("/products", async (req, res) => {
//   try {
//     const products = await getAllProducts(req.params.products);

//     if (products.length != 0) {
//       res.json(products);
//     } else {
//       res.status(404).json({ error: "Products not found." });
//     }
//   } catch {
//     res.status(500).json({ error: "Failed to fetch products." });
//   }
// });

// const getProductById = async (productId) => {
//   try {
//     const productById = await Product.findById(productId);
//     return productById;
//   } catch (error) {
//     console.error("Product not found", error);
//   }
// };

// app.get("/products/:productId", async (req, res) => {
//   try {
//     const product = await getProductById(req.params.productId);

//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404).json({ error: "Product not found." });
//     }
//   } catch {
//     res.status(500).json({ error: "Failed to fetch the product." });
//   }
// });

// const getProductsByCategory = async (productCategory) => {
//   try {
//     const products = await Product.find({ category: productCategory });

//     return products;
//   } catch (error) {
//     console.error("Product not found", error);
//   }
// };

// app.get("/products/category/:category", async (req, res) => {
//   try {
//     const products = await getProductsByCategory(req.params.category);

//     if (products && products.length > 0) {
//       res.json(products);
//     } else {
//       res.status(404).json({ error: "No products found in this category." });
//     }
//   } catch {
//     res.status(500).json({ error: "Failed to fetch products by category." });
//   }
// });

// const getProductsByGender = async (productGender) => {
//   try {
//     const products = await Product.find({ gender: productGender });

//     return products;
//   } catch (error) {
//     console.error("Product not found", error);
//   }
// };

// app.get("/products/gender/:gender", async (req, res) => {
//   try {
//     const products = await getProductsByGender(req.params.gender);

//     if (products && products.length > 0) {
//       res.json(products);
//     } else {
//       res.status(404).json({ error: "No products found in this gender." });
//     }
//   } catch {
//     res.status(500).json({ error: "Failed to fetch products by gender." });
//   }
// });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
