import React from 'react'
import logo from "../images/logo.png";
import "../styles/footer.css";
export default function  Footer ()
{
  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        <img src={contactimg} alt="Description of the image" 
          style={{width:"100%", height:"600px"}}></img>
          <p>Description below the logo</p>
        </div>
        <div className="footer-links">
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
          <ul className="main-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
 

</>

  )
}
