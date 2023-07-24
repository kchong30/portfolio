import Banner from './banner'
import Projects from './projects'
import About from './about'
import Loader from './loader'
import "./styles/frontpage.css"


function FrontPage() {
  return (
    <div className = ".content">
        <Loader />      
        <Banner />
        <About/>
        <Projects />
  </div>
  )
}

export default FrontPage