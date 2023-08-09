import { useEffect, useState } from 'react';
import './styles/scrollbar.css'

function Scrollbar() {
    const [scroll, setScroll] = useState(0);
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    // adjust this value based on your sections
  
    const handleScrollKnob = (e) => {
      const knobPosition = e.clientY - e.target.getBoundingClientRect().top;
      const scrollPercentage = knobPosition / 100; // height of .scrollbar-container
      window.scrollTo({ top: scrollPercentage * maxScroll, behavior: "smooth" });
    };
  
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


    const knobHeight = (window.innerHeight / document.body.scrollHeight) * 100; // Calculate knob height in %
    const knobTop = (scroll / maxScroll) * (100 - knobHeight); // Calculate knob top position in %
  
    return (
        <div className="right-container">
          <div className="scroll-arrows" onClick={handleUpArrow}>
            &uarr; {/* Up arrow */}
          </div>
          <div className="scrollbar-container">
        <div
          className="scroll-knob"
          style={{ top: `${knobTop}%`, height: `${knobHeight}%` }}
          onMouseDown={(e) => e.target.setCapture()}
          onMouseMove={handleScrollKnob}
        ></div>
      </div>
          <div className="scroll-arrows" onClick={handleDownArrow}>
            &darr; {/* Down arrow */}
          </div>
        </div>
      );
  }
  
  export default Scrollbar;
  