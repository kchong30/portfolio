import { useEffect, useState } from 'react';
import Banner from './banner';
import Projects from './projects';
import About from './about';
import Scrollbar from './scrollbar';
import Contact from './contact';
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
      <div className="content">
        <div className={`section ${scroll < window.innerHeight ? 'fade-in' : ''}`}>
          <Banner />
        </div>
        <div className={`section ${scroll >= window.innerHeight && scroll < window.innerHeight * 2 ? 'fade-in' : ''}`}>
        <About />
      </div>
      <div className={`section ${scroll >= (window.innerHeight * 2) && scroll <= (window.innerHeight * 3) ? 'fade-in' : ''}`}>
        <Projects />
      </div>
      <div className={`section ${scroll >= window.innerHeight * 3 ? 'fade-in' : ''}`}>
        <Contact />
      </div>
      </div>
      <div className="right-side">
        <Scrollbar />
      </div>
    </div>
  );
  
}

export default FrontPage;
