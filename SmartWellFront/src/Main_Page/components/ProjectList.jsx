import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Styles/ProjectList.css';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Пока нет бека просто моки
    setProjects([
      { id: 1, name: 'Project 1' },
      { id: 2, name: 'Projcet 2' },
      { id: 3, name: 'Project 3' },
    ]);
  }, []);

  return (
    <div className="project-list">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-icon">
              <i className="fas fa-cloud"></i>
              <i className="fas fa-database"></i>
            </div>
            <h3>{project.name}</h3>
            <Link to={`/project/${project.id}`} className="btn btn-primary">
              Open
            </Link>
          </div>
        ))}
      </div>
      <Link to="/new-project" className="btn btn-secondary">
        Create new project
      </Link>
    </div>
  );
}

export default ProjectList;