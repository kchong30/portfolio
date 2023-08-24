/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import './styles/details.css'

const ProjectDetails = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-details-container">
      <div className="project-image">
        <img src={project.image} alt={`${project.title} preview`} />
      </div>
      <div className="project-info">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <h3>Overview</h3>
        <p>{project.overview}</p>
        <h3>Challenges</h3>
        <p>{project.challenges}</p>
        <h3>Tech Stack</h3>
        <p>{project.technology.join(', ')}</p>
        <a href={project.githubLink} className="project-link">Github</a>
        {project.deploymentLink && <a href={project.deploymentLink} className="project-link">Deployment</a>}
      </div>
    </div>
  );
};


export default ProjectDetails;
