import Card from "./card"
import "./styles/projects.css"
function Projects() {

  const projects = [
        {
          title: "E-commerce Website",
          description: "Built a responsive e-commerce website using React and Node.js.",
          challenges: "Implementing payment gateway integration and managing inventory.",
          technology: ["React", "Node.js", "Express", "MongoDB"],
        },
        {
          title: "Weather App",
          description: "Developed a weather application that provides real-time weather information.",
          challenges: "Integrating with multiple weather APIs and handling data visualization.",
          technology: ["React", "Node.js", "Express", "OpenWeatherMap API"],
        },
        {
          title: "Task Management System",
          description: "Created a task management system with user authentication and role-based access control.",
          challenges: "Implementing secure authentication and authorization mechanisms.",
          technology: ["React", "Node.js", "Express", "MongoDB", "Passport.js"],
        },
        // Add more project objects as needed
      ];

  return (
    <div className = "projects">
      <h1 className = "text-left">Projects</h1>
      <h2 className = "text-left">Click For More Details!</h2>
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