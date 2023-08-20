import {useState} from 'react'
import Card from "./card"
import "./styles/projects.css"
import ReactPaginate from 'react-paginate';


function Projects() {

  const [currentPage, setCurrentPage] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const projectsPerPage = 2;

  const handlePageClick = (selectedItem) => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentPage(selectedItem.selected);
      setFadeOut(false);
    }, 500); // Same duration as the CSS transition
  };

  const projects = [
        {
          title: "Agilitek - Segmentation Tool",
          description: "Industry Project sponsored by Agilitek.",
          technology: ["React", "Node.js", "Express", "MongoDB"],
          image: "https://i.imgur.com/rOFmbDx.png"
        },
        {
          title: "Weather App",
          description: "Developed a weather application that provides real-time weather information.",
          technology: ["React", "Node.js", "Express", "OpenWeatherMap API"],
          image: "https://i.imgur.com/IraHkP4.png"
        },
        {
          title: "Task Management System",
          description: "Created a task management system with user authentication and role-based access control.",
          technology: ["React", "Node.js", "Express", "MongoDB", "Passport.js"],
        },
        // Add more project objects as needed
      ];

/* const handlePageClick = (selectedItem) => {
  setCurrentPage(selectedItem.selected);
}; */
        
const offset = currentPage * projectsPerPage;
const currentProjects = projects.slice(offset, offset + projectsPerPage);

return (
  <div className="projects">
    <div>
      <h1 className = "project-title">Projects <span className = "title-icon">&lt;/&gt;</span></h1>
      <div className="info-hint">Mouse over for more.</div>
    </div>
    <div className={`cards ${fadeOut ? 'fade-out' : ''}`}>
        {currentProjects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      {Array(4 - currentProjects.length % 4).fill().map((_, index) => (
        <div key={`placeholder-${index}`} className="placeholder-card"></div>
      ))}
    </div>
    <div className="pagination-container">
      <ReactPaginate
        previousLabel={<i className="fa fa-angle-double-left"></i>}
        nextLabel={<i className="fa fa-angle-double-right"></i>}
        breakLabel={'...'}
        pageCount={Math.ceil(projects.length / projectsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        previousLinkClassName={'pagination__link'}
        nextLinkClassName={'pagination__link'}
        disabledClassName={'pagination__link--disabled'}
        activeClassName={'active'}
      />
    </div>
  </div>
);

}

export default Projects