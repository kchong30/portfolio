import './styles/biography.css'

function Biography() {
  return (
    <div className="bio-wrapper">
      <div className="title">
        <h1>About Me<span>.</span></h1>
      </div>
      <div className="animated-line"></div>      
      <div className="bio-content">
        <div className="paragraph-one">
          <p>I am a developer with a deep passion all things web development. I specialize in accessibility, performance, and stability - all while taking into account
            aesthetic and the end user experience. I strive for bespoke and custom made solutions. There is a time and place for template designs
            and code - but I truly believe the best content from the web is borne of careful collaboration, communication, and creativity.
          </p>
        </div>
        <div className="paragraph-two">
          <p>Yeah</p>
        </div>
        <div className="skills-and-languages">
          <p>Skills Languages</p>
        </div>
        <div className="contact-info"></div>
      </div>
    </div>
  );
}

export default Biography;
