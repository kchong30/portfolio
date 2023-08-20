import "./styles/about.css"
import {Link} from "react-router-dom"

function About() {
  return (
    <div className="about">
      <h1 className="mb-5">Lets collaborate<span className="period"> &lt;/&gt;</span></h1>
      <p>From simple single-page apps, to more large scale realized systems - my passion planning and engineering accessible, secure, and bespoke web projects.
        Let me help you build the next great thing on the net.
      </p>
      <div className="button-container">
        <Link to="/about">
          <button className="aboutButton">Learn a bit more about me</button>
        </Link>
      </div>
    </div>

  );
}

export default About;