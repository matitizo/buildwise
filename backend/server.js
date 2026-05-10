const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Error ❌", err));

const landSchema = new mongoose.Schema(
  {
    title: String,
    location: String,
    size: String,
    price: Number,
    image: String,
    status: {
      type: String,
      default: "Kiragurishwa",
    },
  },
  { timestamps: true }
);

const Land = mongoose.model("Land", landSchema);

app.get("/api", (req, res) => {
  res.json({ message: "BuildWise Backend API irakora neza 🚀" });
});

app.get("/api/lands", async (req, res) => {
  try {
    const lands = await Land.find().sort({ createdAt: -1 });
    res.json(lands);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch lands" });
  }
});

app.post("/api/lands", async (req, res) => {
  try {
    const land = await Land.create(req.body);
    res.status(201).json(land);
  } catch (error) {
    res.status(500).json({ message: "Failed to create land" });
  }
});

app.delete("/api/lands/:id", async (req, res) => {
  try {
    await Land.findByIdAndDelete(req.params.id);
    res.json({ message: "Land deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete land" });
  }
});

const frontendPath = path.join(__dirname, "../frontend/dist");

app.use(express.static(frontendPath));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server iri gukora kuri port ${PORT} 🚀`);
});