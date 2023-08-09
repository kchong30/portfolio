import Card from "./card"
import "./styles/projects.css"
function Projects() {

  const projects = [
        {
          title: "Agilitek - Segmentation Tool",
          description: "Industry Project sponsored by Agilitek.",
          technology: ["React", "Node.js", "Express", "MongoDB"],
        },
        {
          title: "Weather App",
          description: "Developed a weather application that provides real-time weather information.",
          technology: ["React", "Node.js", "Express", "OpenWeatherMap API"],
        },
        {
          title: "Task Management System",
          description: "Created a task management system with user authentication and role-based access control.",
          technology: ["React", "Node.js", "Express", "MongoDB", "Passport.js"],
        },
        // Add more project objects as needed
      ];

  return (
    <div className = "projects">
      <div className = "cards">
      {projects.map((project, index) => (
        <Card
          key={index}
          project={project}
        />
      ))}
      </div>
    </div>
  )
}

export default Projects