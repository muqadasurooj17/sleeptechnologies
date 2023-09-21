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



        <div className="threesections">
      <section className="section">
        <h2>Sales</h2>
        <p>Our friendly team is here to help.</p>
        <p>
        info@innovasleeptech.com
          </p>
      </section>

      <section className="section">
        <h2>Support</h2>
        <p>Questions or queries? Get in touch!</p>
        <p>
        info@innovasleeptech.com
        </p>
      </section>

      <section className="section">
        <h2>Phone</h2>
        <p>Mon-Fri from 8 a.m. to 5 p.m.</p>
        <p> +1 (314) 499-8869</p>
      </section>

        </div>
   
</>

  )
}
