import { Routes, Route } from "react-router-dom";
import FrontPage from './frontpage'
import Biography from './biography'
import Navbar from './navbar'
import Projects from './projects'
import ProjectDetails from './projects/details'
import useScrollToTop from '../hooks/useScrollToTop'; // Import the custom hook


const projects = [
  {
    id: "1",
    title: "Agilitek - Segmentation Tool",
    description: "Industry Project sponsored by Agilitek.",
    overview: "Detailed overview of the project...",
    challenges: "Challenges faced during the project...",
    technology: ["React", "Node.js", "Express", "MongoDB"],
    image: "https://i.imgur.com/rOFmbDx.png",
    githubLink: "https://github.com/agilitek-repo",
    deploymentLink: "https://agilitek.com",
  },
  {
    id: "2",
    title: "Weather App",
    description: "Developed a weather application that provides real-time weather information.",
    overview: "Overview of the weather application...",
    challenges: "Challenges faced during development...",
    technology: ["React", "Node.js", "Express", "OpenWeatherMap API"],
    image: "https://i.imgur.com/IraHkP4.png",
    githubLink: "https://github.com/weather-app-repo",
  },
  {
    id: "3",
    title: "Task Management System",
    description: "Created a task management system with user authentication and role-based access control.",
    overview: "Overview of the task management system...",
    challenges: "Challenges faced during task management system development...",
    technology: ["React", "Node.js", "Express", "MongoDB", "Passport.js"],
    githubLink: "https://github.com/task-management-repo",
  },
  // Add more project objects as needed
];




function App() {

  useScrollToTop();

  return (
    <div>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<FrontPage/>} />
            <Route path="/about" element={<Biography/>} />
            <Route path="/projects" element={<Projects projects={projects} />} />
            <Route path="/projects/:projectId" element={<ProjectDetails projects={projects} />} />
        </Routes>
    </div>
  )
}

export default App
