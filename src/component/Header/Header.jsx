import React from 'react'
import "./headerStyle.css"
import { PiCaretCircleDownFill } from "react-icons/pi";

const Header = () => {
  return (
    <div class='hometop' >
      <div className="home-top-section">
        <p>
          {" "}
          <span style={{ opacity: "50%", marginRight: "10px" }}>
            Home
          </span>{" "}
          Pune Branch
        </p>
        <h1 style={{fontWeight:900}}>
          KC Overseas Education  <br /> Pune
        </h1>
        <p style={{textAlign: "center" }}>
          We value your career aspirations, which is why we map your
          preferences with the best that our global universities have to
          offer. Thousands of our students are pursuing their programs and
          aspirations in eminent universities globally and we welcome you to
          pursue yours!
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            margin: "auto",
            width: "fit-content",
            marginTop: "30px",
            alignItems:'center'
            ,justifyContent:'center'
          }}
        >
          <button className="enquire-button">Enquire Now</button>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <PiCaretCircleDownFill
              style={{ fontSize: "55px", cursor: "pointer" }}
            />
            Branch Address
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header