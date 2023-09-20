import React from 'react'
import card1 from '../images/brands-1-min.jpg';
import card2 from '../images/brands-2-min.jpg';
import "../styles/brand.css";
export default function  Brand ()
{
  return (
    <>
    <div className='brandcont'>
      <button className='brandbtn'>
        Brand</button>
        </div>
<div className='row'>
  <div class="cards" >
  <img src={card1} alt="Description of the image" style={{width:"400px", height:"max-content"}}/>
  
    <h2>Read More</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisilaborum <br>
      </br>exceue officia officiis tempore!
    </p>
  </div>
  <div class="cards" >
  <img src={card2} alt="Description of the image" style={{width:"400px", height:"max-content"}}/>
    <h2>Read More</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisilaborum <br>
      </br>exceue officia officiis tempore!
    </p>
  </div>
  <div class="empty" >
  
  </div>      
    </div>
    <hr></hr>
</>

  )
}
