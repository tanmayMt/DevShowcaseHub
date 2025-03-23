const Project = require('../models/Project');

// Get all projects
const getProjects = async (req, res) => {
    const projects = await Project.find({});
    res.json(projects);
};

// Get project by category
const getProjectsByCategory = async (req, res) => {
    const projects = await Project.find({ category: req.params.category });
    res.json(projects);
};

// Add a new project
const addProject = async (req, res) => {
    const { title, description, link, category } = req.body;
    const newProject = new Project({ title, description, link, category });
    await newProject.save();
    res.status(201).json(newProject);
};

// Delete a project
const deleteProject = async (req, res) => {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project removed' });
};

module.exports = {
    getProjects,
    getProjectsByCategory,
    addProject,
    deleteProject,
};
