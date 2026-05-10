const express = require("express");
const router = express.Router();

// Dummy Data
let projects = [
  {
    id: 1,
    name: "Inzu ya Kigali",
    location: "Kicukiro",
    budget: "25,000,000 Frw",
  },
  {
    id: 2,
    name: "Apartment ya Musanze",
    location: "Musanze",
    budget: "80,000,000 Frw",
  },
];

// GET ALL PROJECTS
router.get("/", (req, res) => {
  res.json(projects);
});

// GET SINGLE PROJECT
router.get("/:id", (req, res) => {
  const project = projects.find(
    (p) => p.id === parseInt(req.params.id)
  );

  if (!project) {
    return res.status(404).json({
      message: "Project ntabwo yabonetse",
    });
  }

  res.json(project);
});

// CREATE PROJECT
router.post("/", (req, res) => {
  const newProject = {
    id: projects.length + 1,
    name: req.body.name,
    location: req.body.location,
    budget: req.body.budget,
  };

  projects.push(newProject);

  res.status(201).json({
    message: "Project yongewemo neza ✅",
    project: newProject,
  });
});

// UPDATE PROJECT
router.put("/:id", (req, res) => {
  const project = projects.find(
    (p) => p.id === parseInt(req.params.id)
  );

  if (!project) {
    return res.status(404).json({
      message: "Project ntabwo yabonetse",
    });
  }

  project.name = req.body.name || project.name;
  project.location = req.body.location || project.location;
  project.budget = req.body.budget || project.budget;

  res.json({
    message: "Project yahinduwe neza ✅",
    project,
  });
});

// DELETE PROJECT
router.delete("/:id", (req, res) => {
  projects = projects.filter(
    (p) => p.id !== parseInt(req.params.id)
  );

  res.json({
    message: "Project yasibwe neza 🗑️",
  });
});

module.exports = router;