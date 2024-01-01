// import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="navbar flex items-center sm:justify-between md:justify-evenly">
      <h2>SAM EYO</h2>
      <div className="desktopMenu flex items-center justify-center">
        <a activeClass="active" href="#intro"  className="desktopMenuListItem">Home</a>
        <a activeClass="active" href="#skills"  className="desktopMenuListItem">About</a>
        <a activeClass="active" href="#works"  className="desktopMenuListItem">Portfolio</a>
        <a activeClass="active" href="#clients"  className="desktopMenuListItem">Web</a>
        <a activeClass="active" href="#contact"  className="desktopMenuListItem">Contact</a>
      </div>
      <a href="tel:+2348165293571" className="desktopMenuBtn flex items-center justify-center">
        <FaPhoneAlt />
        Contact Me
      </a>
      
      <BiMenuAltRight className="mobMenu text-4xl sm:flex" onClick={() => setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu ? "flex" : "none"}}>
        <a activeClass="active" href="#intro"  className="ListItem" onClick={() => setShowMenu(false)}>Home</a>
        <a activeClass="active" href="#skills"  className="ListItem" onClick={() => setShowMenu(false)}>About</a>
        <a activeClass="active" href="#works"  className="ListItem" onClick={() => setShowMenu(false)}>Portfolio</a>
        <a activeClass="active" href="#clients"  className="ListItem" onClick={() => setShowMenu(false)}>Services</a>
        <a activeClass="active" href="#contact"  className="ListItem" onClick={() => setShowMenu(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
