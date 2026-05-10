const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const materialRoutes = require("./routes/materialRoutes");
const landRoutes = require("./routes/landRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Test
app.get("/api", (req, res) => {
  res.json({
    message: "BuildWise Backend API irakora neza 🚀",
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/lands", landRoutes);

// Serve frontend build
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// React frontend route
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// MongoDB Connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

// Port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server iri gukora kuri port ${PORT} 🚀`);
});