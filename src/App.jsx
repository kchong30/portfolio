import { Routes, Route } from "react-router-dom";
import FrontPage from './frontpage'
import Biography from './biography'

function App() {

  return (
    <div>
        <Routes>
            <Route exact path="/" element={<FrontPage/>} />
            <Route path = "/about" element = {<Biography/>} />
        </Routes>
    </div>
  )
}

export default App
