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
  .catch((err) => console.log(err));

/* =========================
   PROJECT MODEL
========================= */

const projectSchema = new mongoose.Schema({
  name: String,
  location: String,
  budget: String,
});

const Project = mongoose.model("Project", projectSchema);

/* =========================
   LAND MODEL
========================= */

const landSchema = new mongoose.Schema({
  title: String,
  location: String,
  price: String,
  image: String,
});

const Land = mongoose.model("Land", landSchema);

/* =========================
   PROJECT ROUTES
========================= */

app.get("/api/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.post("/api/projects", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

/* =========================
   LAND ROUTES
========================= */

app.get("/api/lands", async (req, res) => {
  const lands = await Land.find();
  res.json(lands);
});

app.post("/api/lands", async (req, res) => {
  const land = new Land(req.body);
  await land.save();
  res.json(land);
});

/* =========================
   FRONTEND BUILD
========================= */

app.use(
  express.static(
    path.join(__dirname, "../frontend/dist")
  )
);

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../frontend/dist/index.html")
  );
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server iri gukora kuri port ${PORT} 🚀`);
});