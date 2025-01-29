const express = require("express");
const cors = require("cors");
const { initializeDatabase } = require("./db/db.connect");
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

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
