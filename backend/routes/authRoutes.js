const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminUser = {
    username: 'admin',
    password: '$2a$10$EYXht9pF5A6/S4WGBq0tuOzZjzYf7wY2G1IAnbWhIRG/n/xDY5D4W', // "admin123" hashed
};

// Admin Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (username !== adminUser.username) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, adminUser.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ username: adminUser.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;