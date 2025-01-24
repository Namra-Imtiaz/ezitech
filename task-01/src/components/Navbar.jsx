import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; 

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 shadow-md w-[85%] rounded-lg">
      {/* TopBar */}
      <div className=" text-white py-4 text-xs hidden md:flex justify-between items-center px-10 backdrop-blur-sm">
        <div className="flex space-x-6 items-center">
          <span>
            <i className="fas fa-phone mr-1"></i> +923455555396
          </span>
          <span>
            <i className="fas fa-envelope mr-1"></i> INFO@EZITECH.ORG
          </span>
          <span>
            <i className="fas fa-map-marker-alt mr-1"></i> WESTRIDGE 1, OFFICE #304-G PESHAWAR ROAD, RAWALPINDI, PAKISTAN
          </span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-behance"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-5xl mx-auto flex justify-evenly items-center py-4 px-2 bg-white/70 backdrop-blur-md rounded-xl" >
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        <ul className="flex space-x-4 text-gray-800 text-sm mt-3">
          <li>
            <Link to="home" className="hover:text-blue-600">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/internships" className="hover:text-blue-600">
              INTERNSHIP'S
            </Link>
          </li>
          <li>
            <Link to="/careers" className="hover:text-blue-600">
              CAREERS
            </Link>
          </li>
          <li>
            <Link to="/courses" className="hover:text-blue-600">
              COURSES
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-blue-600">
              TECH BLOGS
            </Link>
          </li>
          <li>
          <button className="text-xs shadow-lg bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
            IPORTAL LOGIN
          </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
