// src/components/Navbar.jsx

import { useState } from "react";
import "../styles/index.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">MSZ</div>
            <div className="navbar-center">
                <ul className="navbar-menu">
                    <li><a href="#about">À Propos</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            {/* Hamburger menu */}
            <div className="navbar-toggle" onClick={() => setMenuOpen(true)}>
                ☰
            </div>

            {/* Panneau latéral */}
            <div className={`navbar-sidebar ${menuOpen ? "active" : ""}`}>
                <span className="close-menu" onClick={() => setMenuOpen(false)}>×</span>
                <ul>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}>À Propos</a></li>
                    <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projets</a></li>
                    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
