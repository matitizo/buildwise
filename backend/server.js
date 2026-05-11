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
    status: { type: String, default: "Kiragurishwa" },
  },
  { timestamps: true }
);

const materialSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    stock: Number,
    category: String,
    image: String,
  },
  { timestamps: true }
);

const projectSchema = new mongoose.Schema(
  {
    title: String,
    name: String,
    location: String,
    budget: Number,
    status: { type: String, default: "Pending" },
    progress: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Land = mongoose.model("Land", landSchema);
const Material = mongoose.model("Material", materialSchema);
const Project = mongoose.model("Project", projectSchema);

app.get("/api", (req, res) => {
  res.json({ message: "BuildWise Backend API irakora neza 🚀" });
});

/* LANDS */
app.get("/api/lands", async (req, res) => {
  const lands = await Land.find().sort({ createdAt: -1 });
  res.json(lands);
});

app.post("/api/lands", async (req, res) => {
  const land = await Land.create(req.body);
  res.status(201).json(land);
});

app.delete("/api/lands/:id", async (req, res) => {
  await Land.findByIdAndDelete(req.params.id);
  res.json({ message: "Land deleted" });
});

/* MATERIALS */
app.get("/api/materials", async (req, res) => {
  const materials = await Material.find().sort({ createdAt: -1 });
  res.json(materials);
});

app.post("/api/materials", async (req, res) => {
  const material = await Material.create(req.body);
  res.status(201).json(material);
});

app.delete("/api/materials/:id", async (req, res) => {
  await Material.findByIdAndDelete(req.params.id);
  res.json({ message: "Material deleted" });
});

/* PROJECTS */
app.get("/api/projects", async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

app.post("/api/projects", async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(project);
});

app.delete("/api/projects/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted" });
});

/* FRONTEND */
const frontendPath = path.join(__dirname, "../frontend/dist");

app.use(express.static(frontendPath));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server iri gukora kuri port ${PORT} 🚀`);
});