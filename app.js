const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const dotenv = require("dotenv");
const cors = require("cors");
const info = require("./swagger/info");
const swaggerDocument = require("./swagger/swagger.json");

dotenv.config();
const app = express();

// Connect MongoDB
connectDB();

// Enable CORS for all requests
app.use(cors());

// Middleware
app.use(express.json());

const swaggerOptions = {
  ...info,
  paths: swaggerDocument.paths,
  components: swaggerDocument.components,
};

// Initialize swagger-jsdoc
const swaggerDocs = swaggerJsDoc({
  swaggerDefinition: swaggerOptions,
  apis: ["./routes/*.js"],
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api/v1", userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
