import { useEffect, useState } from 'react';
import './styles/scrollbar.css'

function Scrollbar() {
  const [scroll, setScroll] = useState(0);

  const handleUpArrow = () => {
    const currentSection = Math.floor(scroll / window.innerHeight + 0.1); // Adding 0.1 to avoid floating-point issues
    const targetPosition = window.innerHeight * Math.max(currentSection - 1, 0); // Ensure it doesn't go below 0

    console.log(currentSection, targetPosition)
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };
// Handle scrolling down to the next section, with an extra distance to ensure proper alignment
const handleDownArrow = () => {
  const currentSection = Math.floor(scroll / window.innerHeight); // Determine the current section index
  const targetPosition = window.innerHeight * (currentSection + 1) + 5; // Calculate the target position, adding extra distance
  console.log(currentSection, targetPosition)

  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
};

  // useEffect hook to add a scroll event listener and keep the scroll state updated
  useEffect(() => {
    const updateScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

// Function to scroll to a specific component index, with an extra distance to ensure proper alignment
const scrollToComponent = (index) => {
  window.scrollTo({ top: (window.innerHeight * index) + 5, behavior: 'smooth' }); // Calculate the target position, adding extra distance
};
  
    return (
      <div>
      {scroll < window.innerHeight && (
        <div className="scroll-to-second" onClick={() => scrollToComponent(1)}>
         <i className="fa fa-angle-double-down"></i>
        </div>
      )}
      <div className={`right-container ${scroll < window.innerHeight ? 'hidden' : ''}`}>
        <div className="scroll-arrows" onClick={handleUpArrow}>
          <i className="fa fa-angle-double-up"></i>
        </div>
        <div className="scrollbar-container">
          <div className="line-nodes">
            <div className="scroll-line"></div> {/* Line where the nodes sit */}
            {/* Determine if the About node should be active, based on precise thresholds */}
            <div className={`scroll-node ${scroll >= window.innerHeight && scroll < window.innerHeight * 2 - 5 ? 'active' : ''}`} onClick={() => scrollToComponent(1)} tabIndex="0">
              <span className="scroll-node-label">About</span>
            </div>
            {/* Determine if the Projects node should be active, based on precise thresholds */}
            <div className={`scroll-node ${scroll >= window.innerHeight * 2 && scroll < window.innerHeight * 3 - 5 ? 'active' : ''}`} onClick={() => scrollToComponent(2)} tabIndex="0">
              <span className="scroll-node-label">Projects</span>
            </div>
            {/* Determine if the Contact Me node should be active, based on precise thresholds */}
            <div className={`scroll-node ${scroll >= window.innerHeight * 3 ? 'active' : ''}`} onClick={() => scrollToComponent(3)} tabIndex="0">
              <span className="scroll-node-label">Contact Me</span>
            </div>
          </div>
        </div>
        <div className="scroll-arrows" onClick={handleDownArrow}>
         <i className="fa fa-angle-double-down"></i>
        </div>
      </div>
      </div>
    );
  }
  
  export default Scrollbar;
  