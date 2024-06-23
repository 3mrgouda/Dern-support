import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import users from "./routes/users.js";
import articles from "./routes/articleRoute.js";
import services from "./routes/serviceRoute.js";
import products from "./routes/productRoute.js";
import uploadRoute from "./routes/uploadRoute.js";
import { connectDB } from "./config/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: "./config/.env",
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/dist")));
app.use("/uploads", express.static("uploads")); // Serve uploaded files

// Routes
app.use("/api/v1/users", users);
app.use("/api/v1/articles", articles);
app.use("/api/v1/services", services);
app.use("/api/v1/products", products);
app.use("/api/v1", uploadRoute); // Add the upload route

// Fallback for SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

// Start server after connecting to DB
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
