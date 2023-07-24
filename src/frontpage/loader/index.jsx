import {useState, useEffect } from "react"
import './styles/loader.css'

function Loader() {
  
const [loading, setLoading] = useState(false)

useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(true);
    }, 500);
    return () => clearTimeout(timer);
}, []);

return (
    <div className = {
        `loader ${loading ? 'greeting-animate-out' : ''}`
    }>
    <h1>Greetings! Welcome to my Portfolio</h1>
  </div>
  )
}

export default Loader