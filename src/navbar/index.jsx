import { useState } from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          {/* Add more navigation items as needed */}
        </ul>
      )}
    </nav>
  );
}