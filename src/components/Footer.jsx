import React from 'react'
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import "../styles/footer.css";
export default function  Footer ()
{
  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        <img src={logo} alt="Description of the image" ></img>

        <div>
        <p>At Innovative Sleep Technologies, we value your 
        feedback and are here to answer any questions you may have.
            Please don't hesitate to reach out to us by writing or calling. 
            Your satisfaction is our top priority.</p>
        </div>
        </div>
      
        <div className="footer-links">
         
          <ul className="main-links">
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Services</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
 

</>

  )
}
