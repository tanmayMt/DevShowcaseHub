const express = require('express');
const {
    getProjects,
    getProjectsByCategory,
    addProject,
    deleteProject,
} = require('../controllers/projectController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', getProjects);
router.get('/:category', getProjectsByCategory);

// Admin-only routes
router.post('/', protect, addProject);
router.delete('/:id', protect, deleteProject);

module.exports = router;
