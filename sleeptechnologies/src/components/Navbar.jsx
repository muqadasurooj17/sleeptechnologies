import React from 'react'
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img src={logo}/>
        </div>
        <div className='rightside'>
            <Link to="/">Home</Link>
            <Link to="/">Brand</Link>
            <Link to="/">Mission</Link>
            <Link to="/">Carrer</Link>
            <Link to="/">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar