import Banner from './banner'
import Projects from './projects'
import About from './about'
import "./styles/frontpage.css"


function FrontPage() {
  return (
    <div className = ".content">
        <Banner />
        <About/>
        <Projects />
  </div>
  )
}

export default FrontPage