import {useState} from 'react'
import Card from "./card"
import "./styles/projects.css"
import ReactPaginate from 'react-paginate';
import { useProjects } from '../../ProjectContext'; // Import your ProjectsContext



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

  const { projects } = useProjects(); // Access the project data

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