
import Logo from "../images/logo.png";
 import { Link } from "react-router-dom";
import React from 'react';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">


<div className="logo">
<img src={Logo} alt='logo here'/></div>

      
      <ul className="nav-links">            
      <li className="nav-item">
        <Link to="/hero">Home</Link></li>
        <li className="nav-item">
          <Link to ="/about">About</Link></li>
        <li className="nav-item">
          <Link to="/career">Career</Link></li>
        <li className="nav-item">

          <Link href="/contact">Contact</Link>
          </li>
     </ul>
    </nav>
  );
}

export default Navbar;
