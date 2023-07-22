import { useState } from "react";
import {Link} from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav  className = "flex fixed top-0 left-0 w-full">
      <button onClick={toggleDropdown}>Menu</button>
      {isOpen && (
        <ul  className = "flex">
          <Link to = "/"><li>Home</li></Link>
          <Link to = "/about"><li>About</li></Link>
          <li>Projects</li>
          {/* Add more navigation items as needed */}
        </ul>
      )}
    </nav>
  );
}