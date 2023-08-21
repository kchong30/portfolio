import './styles/biography.css'
import Skills from './skills'


function Biography() {
  return (
    <div className="bio-wrapper">
      <div className={`intro ${scroll < window.innerHeight ? 'fade-in' : ''}`}>
      <div className="title">
        <h1>About Me<span className = "punctuation">.</span></h1>
      </div>
      <div className="animated-line"></div>      
      <div className="paragraph-one">
          <p className = "mb-3">I'm a developer with a deep passion all things web development.</p> 
          <p className = "mb-3">I specialize in accessibility, performance, and stability - without sacrificing
            aesthetic and the end user experience. </p>
          <p className = "mb-3">Bespoke, custom, tailored products and solutions are what drive me as a professional.
          </p>
        </div>
    </div>
    <Skills />

    </div>
  );
}

export default Biography;
