import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Styles/ProjectDetails.css'
import WellStatistics from './WellStatistics';

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [wells, setWells] = useState([]);
  const [uniqueCurves, setUniqueCurves] = useState([]);

  useEffect(() => {
    // Здесь запрос к беку для получения данных проекта, скважин и кривых и чето еще 
    setProject({ id, name: `Project ${id}` });
    setWells([
      { id: 1, name: 'Well 1' },
      { id: 2, name: 'Well 2' },
      { id: 3, name: 'Well 3' },
    ]);
    setUniqueCurves(['Curve 1', 'Curve 2', 'Curve 3']);
  }, [id]);

  return (
    <div className="project-details">
      <h2>{project?.name}</h2>
      <div className="project-content">
        <div className="wells-list">
          <h3>Wells</h3>
          <ul>
            {wells.map((well) => (
              <li key={well.id}>
                <Link to={`/project/${id}/well/${well.id}`}>{well.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="unique-curves">
          <h3>Unique curves</h3>
          <ul>
            {uniqueCurves.map((curve, index) => (
              <li key={index}>{curve}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link to={`/export/${id}`} className="btn btn-primary">
        Export
      </Link>
    </div>
  );
}

export default ProjectDetails;