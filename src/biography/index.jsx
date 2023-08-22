import './styles/biography.css';
import Skills from './skills';
import Intro from './intro';

function Biography() {
  return (
    <div className="bio-wrapper">
      <div className="intro-container">
        <Intro />
      </div>
      <div className="skills-container">
        <Skills />
      </div>
    </div>
  );
}

export default Biography;