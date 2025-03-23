import React, { useState } from 'react';
import axios from '../api/api';

const AddProject = ({ fetchProjects }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    category: 'MERN',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/projects', formData);
    fetchProjects();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Project Title" onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" onChange={handleChange} />
      <input type="text" name="link" placeholder="Project Link" onChange={handleChange} required />
      <select name="category" onChange={handleChange}>
        <option value="MERN">MERN</option>
        <option value="Spring Boot">Spring Boot</option>
        <option value="Backend API">Backend API</option>
      </select>
      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProject;
