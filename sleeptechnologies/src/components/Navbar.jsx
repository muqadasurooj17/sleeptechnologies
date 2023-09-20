import React from 'react';
import "../styles/Navbar.css";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function  Navbar ()
{
  return (
    <div className="navbar">
        <div className="leftside">
            <img src={Logo} alt='logo here'/>
        </div>
        <div className='rightside'>
        <Link to="/"> Home </Link>
        <Link to="/Brand"> Brand </Link>
        <Link to="/Mission"> Mission </Link>
        <Link to="/Contact"> Contact</Link>
        </div>
    </div>
  //   <div className="collapse navbar-collapse" id="navbarNav">
  //   <ul className="navbar-nav">
  //     <li className="nav-item">
  //       <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  //     </li>
  //     <li className="nav-item">
  //       <Link className="nav-link" to="/login">Login</Link>
  //     </li>
  //   </ul>
  // </div>
  );
}

