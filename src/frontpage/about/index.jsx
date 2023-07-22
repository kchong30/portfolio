import "./styles/about.css"
import {Link} from "react-router-dom"

function About() {
  return (
    <div className = "about">
      <h1 className = "mb-5">Lets collaborate<span className = "period">.</span></h1>
      <p>From simple single-page apps, to more large scale realized systems - my passion planning and engineering accessible,secure, and professional web projects.
        Let me help you build the next great thing on the net.
      </p>
      <Link to = "/about">
        <button className = "aboutButton">Learn a bit more about me</button>
        </Link>
    </div>
  )
}

export default About
