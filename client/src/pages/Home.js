import React, { useEffect, useState } from 'react';
import axios from '../api/api';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await axios.get('/api/projects');
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="container">
      <h1>DevShowcase Hub</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;
