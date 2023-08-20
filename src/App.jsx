import { Routes, Route } from "react-router-dom";
import FrontPage from './frontpage'
import Biography from './biography'
import Navbar from './navbar'


function App() {

  return (
    <div>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<FrontPage/>} />
            <Route path = "/about" element = {<Biography/>} />
        </Routes>
    </div>
  )
}

export default App
