const Project = require("../models/Project");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to get projects" });
  }
};

const addProject = async (req, res) => {
  try {
    const { name, location, budget } = req.body;

    const project = await Project.create({
      name,
      location,
      budget,
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Failed to add project" });
  }
};

const updateProject = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update project" });
  }
};

const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete project" });
  }
};

module.exports = {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
};