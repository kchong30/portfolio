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
              <p className = "mb-3">My original journey post secondary rewarded me with a joint Bachelor Degree in Biochemistry and Computer Sciences at Simon Fraser University.
              </p>
              <p className = "mb-3">After graduation, I spent a few years at Bureau Veritas Laboratories - where I eventually acted as logistics coordinator and liaison for Western Canada, working on process improvement and 
              workflow integration.
              </p>
              <p className = "mb-3">Realizing my passions lie a outside the lab setting - and more towards the Computer Sciences aspect of my earlier degree, I recently 
              completed a certification program at BCIT to polish and refine my skills as a Developer.
              </p>
              <p className = "mb-3">I specialize in accessibility, performance, and stability - without sacrificing
              aesthetic and the end user experience. </p>
              <p className = "mb-3">Bespoke, custom, tailored products and solutions are what drive me as a professional.
              </p>
        </div>
  </div>
  );
}

export default Intro