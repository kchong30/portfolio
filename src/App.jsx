import { Routes, Route } from "react-router-dom";
import FrontPage from './frontpage'
import Biography from './biography'
import Navbar from './navbar'
import Projects from './projects'
import ProjectDetails from './projects/details'
import useScrollToTop from '../hooks/useScrollToTop';
import { ProjectProvider } from './ProjectContext';


function App() {

  useScrollToTop();

  return (
    <ProjectProvider>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<FrontPage />} />
          <Route path="/about" element={<Biography />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Routes>
      </div>
    </ProjectProvider>
  );
}

export default App
