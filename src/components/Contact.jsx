import React from 'react'
import contactimg from "../images/contact.png";
import "../styles/contact.css";
export default function  Contact ()
{
  return (
    <>
    <div className='brandcont'>
      <button className='brandbtn'>
        Contact</button>
        </div>


      
        <div className="contentcon">
        <div > Lets chat</div>
        <h1>
        We’re Here to Help
          </h1>
          <div> We have partners and teams in multiple locations.
            </div>
        
      </div>

        <div className='pict'>
          <img src={contactimg} alt="Description of the image" 
          style={{width:"100%", height:"600px"}}></img>
        </div>
   
</>

  )
}
