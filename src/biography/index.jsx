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
      <div className="language-section">
          <h3>Languages</h3>
          <div className="grid">
            <div><i className="fa fa-bar-chart" aria-hidden="true"></i>JavaScript</div>
            <div><i className="fas fa-python"></i> Python</div>
            {/* Add more languages */}
          </div>
        </div>
        <div className="framework-section">
          <h3>Frameworks</h3>
          <div className="grid">
            <div><i className="fas fa-react"></i> React</div>
            <div><i className="fab fa-angular"></i> Angular</div>
            {/* Add more frameworks */}
          </div>
        </div>
        <div className="database-section">
          <h3>Databases</h3>
          <div className="grid">
            <div><i className="fas fa-database"></i> MySQL</div>
            <div><i className="fas fa-database"></i> MongoDB</div>
            {/* Add more databases */}
          </div>
        </div>
    </div>
    </div>
  );
}

export default Biography;
