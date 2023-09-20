import React from 'react'
import card1 from '../images/brands-1-min.jpg';
import card2 from '../images/brands-2-min.jpg';
import "../styles/brand.css";
export default function  Navbar ()
{
  return (
    <>
    <div className='brandcont'>
      <button className='brandbtn'>
        Brand</button>
<div className='row'>
  <div class="cards" >
  <img src={myImage} alt="Description of the image" style={{width:"100%", height:"max-content"}}/>
  
    <h2>Read More</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisilaborum exceue officia officiis tempore!
    </p>
  </div>
  <div class="cards">
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
    </div>
    </div>
    </>
  )
}
