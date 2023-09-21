import React from "react";

import "../styles/career.css";
export default function Brand() {
  return (
    <>
      <div className="brandcont">
        <button className="brandbtn">Career</button>
      </div>
      <div className="content">
        <h1>Start doing work that matters</h1>
        <p>
          Want to make an impact on people’s lives creating the best sleeping{" "}
          <br></br>experience? Join the team — we’re hiring!
        </p>
      </div>
      <div className="row">
        <div class="widecards">
          <h2>Manager</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisilaborum <br></br>
            exceue officia officiis tempore!
          </p>
        </div>
        <div class="widecards">
          <h2>Outside Sales Representative</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisilaborum <br></br>
            exceue officia officiis tempore!
          </p>
        </div>

        <div className="marketting">
          <div className="markhead">Marketting</div>
          <div className="markdesc">Open positions in our business team.</div>
        </div>

        <div className="seprator">
          <hr></hr>
        </div>
        <div className="customer">
          <div className="cushead">Customer Service</div>
          <div className="cusdesc">
            Open positions in our business team for Customer sales
            representatives.
          </div>
        </div>
        <div class="cuswidecards">
          <h2>Customer Service Representative</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisilaborum <br></br>
            exceue officia officiis tempore!
          </p>
        </div>
      </div>
    </>
  );
}
