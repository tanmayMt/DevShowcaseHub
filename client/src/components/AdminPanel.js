import React, { useEffect, useState } from 'react';
import axios from '../api/api';
import AddProject from './AddProject';

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const { data } = await axios.get('/api/projects');
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    await axios.delete(`/api/projects/${id}`);
    fetchProjects();
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <AddProject fetchProjects={fetchProjects} />
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project._id} className="project-item">
            <h4>{project.title}</h4>
            <button onClick={() => deleteProject(project._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
