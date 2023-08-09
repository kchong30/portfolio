import { useEffect, useState } from 'react';
import Banner from './banner';
import Projects from './projects';
import About from './about';
import Loader from './loader';
import Scrollbar from './scrollbar';
import "./styles/frontpage.css";

function FrontPage() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="left-nav">
        <div className = "navbar-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Banner</div>
        <div className = "navbar-link" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>About</div>
        <div className = "navbar-link" onClick={() => window.scrollTo({ top: ((window.innerHeight * 2)+1), behavior: 'smooth' })}>Projects</div>
      </div>
      <div className="content">
        <Loader />
        <div className={`section ${scroll < window.innerHeight ? 'fade-in' : ''}`}>
          <Banner />
        </div>
        <div className={`section ${scroll >= window.innerHeight && scroll < window.innerHeight * 2 ? 'fade-in' : ''}`}>
          <About />
        </div>
        <div className={`section ${scroll >= window.innerHeight * 2 ? 'fade-in' : ''}`}>
          <Projects />
        </div>
      </div>
      <div className="right-side">
{/*         {scroll > 0 && (
          <div className="scroll-indicator up" onClick={scrollToPreviousSection}>
            ↑
          </div>
        )}
        {scroll < window.innerHeight * 2 && (
          <div className="scroll-indicator down" onClick={scrollToNextSection}>
            ↓
          </div>
        )}
        {/* Additional content can be added here */}
        <Scrollbar />
      </div>
    </div>
  );
  
}

export default FrontPage;
