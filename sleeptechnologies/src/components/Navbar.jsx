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
        <Link to="/hero"> Home</Link>
        <Link to="/brand"> Brand </Link>
        <Link to="/mission"> Mission </Link>
        <Link to="/carrer"> Career </Link>
        <Link to="/contact"> Contact</Link>
        </div>
    </div>
  );
}

