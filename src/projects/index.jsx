import Card from '../frontpage/projects/card';
import './styles/projects.css';
import { useProjects } from '../ProjectContext'; // Import your ProjectsContext

const Projects = () => {
  const { projects } = useProjects(); // Access the project data

  return (
    <div className="projects-container">
        <div className="title-section">
            <div className="title">
                <h1>Projects<span className="punctuation">.</span></h1>
            </div>
            <div className="animated-line"></div>
        </div>
        <div className="cards-container">
            {projects.map((project, index) => (
                <Card key={index} project={project} />
            ))}
        </div>
    </div>
  );
};

export default Projects;