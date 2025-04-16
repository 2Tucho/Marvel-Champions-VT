import React from "react";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); /* State to toggle the menu */

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); /* Toggle the menu state */
  };

  return (
    <header id="header">
      <div>
        <button onClick={toggleMenu}>
          ☰ {/* Burger icon */}
        </button>
        <h1>Marvel Champions</h1>
      </div>
      {menuOpen && (
        <nav>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>
              <a href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#about">
                About
              </a>
            </li>
            <li>
              <a href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;