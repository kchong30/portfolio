/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useProjects } from '../../ProjectContext'; // Import the hook
import './styles/details.css'

const ProjectDetails = () => {
/*   function useForceUpdate() {
    const [value, setValue] = useState(0);
    useEffect(() => {
      setValue(value => value + 1);
    }, []);
  }

  useForceUpdate(); // Add this line */

  const { projects } = useProjects(); // Access the project data
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
        {project.overview.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-left">{paragraph}</p>
        ))}
        <h3>Challenges</h3>
        {project.challenges.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-left">{paragraph}</p>
        ))}
        <h3>Tech Stack</h3>
        <p>{project.technology.join(', ')}</p>
        <h3>GitHub Repository</h3>
        <a href={project.githubLink} className="project-link">{project.githubLink}</a>
        {project.deploymentLink && (
          <>
            <h3>Deployment Link</h3>
            <a href={project.deploymentLink} className="project-link">{project.deploymentLink}</a>
            {project.deploymentCredentials && (
              <p className="deployment-credentials">{project.deploymentCredentials}</p> // Fixed line
            )}
          </>
        )}
      </div>
    </div>
  );
};


export default ProjectDetails;
