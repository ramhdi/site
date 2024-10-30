// src/components/Navbar.tsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-primary shadow z-10">
      <div className="flex items-center justify-between p-4">
        {/* Title */}
        <h1 className="text-xl font-bold text-secondary">Rama Rahardi</h1>

        {/* Toggle Button */}
        <button
          onClick={toggleMenu}
          className="text-3xl text-text focus:outline-none md:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex md:space-x-8 items-center">
          <li>
            <a href="#about-me" className="text-text hover:text-secondary">
              About Me
            </a>
          </li>
          <li>
            <a href="#experience" className="text-text hover:text-secondary">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-text hover:text-secondary">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-text hover:text-secondary">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Collapsible Mobile Menu */}
      <ul
        className={`flex flex-col items-center bg-primary shadow-md space-y-4 overflow-hidden transition-all duration-500 ease-in-out md:hidden ${isOpen ? 'p-4 max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <li>
          <a
            href="#about-me"
            className="text-text hover:text-secondary"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="text-text hover:text-secondary"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-text hover:text-secondary"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-text hover:text-secondary"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
