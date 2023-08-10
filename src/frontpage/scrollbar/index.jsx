import { useEffect, useState } from 'react';
import './styles/scrollbar.css'

function Scrollbar() {
    const [scroll, setScroll] = useState(0);
  
    const handleUpArrow = () => {
      window.scrollTo({ top: scroll - window.innerHeight, behavior: 'smooth' });
    };
  
    const handleDownArrow = () => {
      window.scrollTo({ top: scroll + window.innerHeight, behavior: 'smooth' });
    };
  
    useEffect(() => {
      const updateScroll = () => setScroll(window.scrollY);
      window.addEventListener('scroll', updateScroll);
      return () => window.removeEventListener('scroll', updateScroll);
    }, [scroll]);

    return (
        <div className="right-container">
          <div className="scroll-arrows" onClick={handleUpArrow}>
            <i className="fa fa-angle-double-up"></i>
          </div>
            <div className="scrollbar-container">
              <div className = "line-nodes">
                <div className="scroll-line"></div> {/* Line where the nodes sit */}
                <div className={`scroll-node ${scroll < window.innerHeight ? 'active' : ''}`}></div>
                <div className={`scroll-node ${scroll >= window.innerHeight && scroll < window.innerHeight * 2 ? 'active' : ''}`}></div>
                <div className={`scroll-node ${scroll >= window.innerHeight * 2 ? 'active' : ''}`}></div>
              </div>
            </div>
            <div className="scroll-arrows" onClick={handleDownArrow}>
             <i className="fa fa-angle-double-down"></i>
            </div>
        </div>
      );
  }
  
  export default Scrollbar;
  