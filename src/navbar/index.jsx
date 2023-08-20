import {Link} from "react-router-dom"
import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import  './styles/navbar.css'

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    // If on the homepage, only show navbar after scrolling past the banner
    if (location.pathname === '/' && window.scrollY < window.innerHeight) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call handleScroll to set the initial state based on the route
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]); // Add location.pathname as a dependency to update when the route changes

  return (
    <div className={`navbar-wrapper ${visible ? 'fade-in' : ''}`}>
      <div className="navbar">
        <div className="navbar-left">
          Kevin
        </div>
        <div className="navbar-center">
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <a href="#projects">Projects</a>
        </div>
        <div className="navbar-right"></div>
      </div>
    </div>
  );
}