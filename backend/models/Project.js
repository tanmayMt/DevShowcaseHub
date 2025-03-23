const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        link: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: ['MERN', 'Spring Boot', 'Backend API'],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Project', projectSchema);
