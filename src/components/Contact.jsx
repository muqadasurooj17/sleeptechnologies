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
        <div className='talk'>
          Lets Talk
        </div>
        <div className='help'>
          We are here to help
        </div>
        <div className='desc'> 
        We have partners and teams in multiple locations.
        </div>
        <div className='pict'>
          <img src={contactimg} alt="Description of the image" 
          style={{width:"400px", height:"max-content"}}></img>
        </div>
   
</>

  )
}
