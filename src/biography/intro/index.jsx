import './styles/intro.css'

function Intro() {
  return (
    <div className="intro">
        <div className="title">
        <h1>About Me<span className = "punctuation">.</span></h1>
        </div>
        <div className="animated-line"></div>      
        <div className="paragraph-one">
            <p className = "mb-3">I am a developer with a deep passion all things web development.</p> 
            <p className = "mb-3">I specialize in accessibility, performance, and stability - without sacrificing
            aesthetic and the end user experience. </p>
            <p className = "mb-3">Bespoke, custom, tailored products and solutions are what drive me as a professional.
            </p>
    </div>
  </div>
  );
}

export default Intro