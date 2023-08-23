/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import './styles/details.css'

const ProjectDetails = ({ projects }) => {
  const { projectId } = useParams();

  console.log ({projectId})
  // eslint-disable-next-line react/prop-types
  const project = projects.find(p => p.id === projectId);

  console.log ("hi" + project)

  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-details-container">
      <div className="project-image">
        <img src={project.image} alt={`${project.title} preview`} />
      </div>
      <div className="project-info">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>Stack: {project.technology.join(', ')}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
