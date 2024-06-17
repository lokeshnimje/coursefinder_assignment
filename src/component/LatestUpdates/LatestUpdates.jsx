import React from 'react'
import "./latestUpdatesStyle.css"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { PiStarFourFill } from "react-icons/pi";

const LatestUpdates = () => {
  return (
    <div className='box'>
      <br />
      <h1>Latest KC Updates</h1>

      <div class="latest-updates-container">
        <div className="update-cards">
          <div className="update-hiring-box">
            <div style={{ padding: '20px', }}>
              <h1 style={{ fontWeight: '600', fontSize: '35px', }}>We’re Hiring!</h1>
              <p style={{ fontSize: '16px', width: '66%' }}>KC continues recruitments for its offices across India and Asia even during the unprecedented times of Covid.</p>
            </div>
            <div style={{ padding: '20px'}}>
              <button className="apply-btn">Apply now</button>
            </div>
          </div>
        </div>
        <div className="update-cards">
          <div style={{ margin: '40px auto' }}>
            <img src={require("../image/airc_logo.png")} alt="airc Logo"

              width="100px" />
            <div style={{ height: "70px" }}>
              <p style={{ fontSize: "16px", lineHeight: "25px" }}>American International Recruitment Council</p>
            </div>
            <div className="star-on-badge">
              <PiStarFourFill style={{ fontSize: "12px", color: "#64647A" }} />
              <PiStarFourFill style={{ color: "#64647A" }} />
              <PiStarFourFill style={{ fontSize: "12px", color: "#64647A" }} />
            </div>
            <p className="certified-text">Certified Agents</p>
            <p style={{ color: "#64647A" }}> October 2018 - 2028</p>
          </div>
        </div>

        <div className="update-cards">
          <div style={{ margin: '40px auto' }}>
            <img src={require("../image/british_logo.png")} alt="british Logo"
              width="150px" height="100px" />
            <div style={{ height: "70px" }}>
              <p style={{ fontSize: "16px", lineHeight: "25px" }}>The British Council</p>
            </div>
            <div className="star-on-badge">
              <PiStarFourFill style={{ fontSize: "12px", color: "#64647A" }} />
              <PiStarFourFill style={{ color: "#64647A" }} />
              <PiStarFourFill style={{ fontSize: "12px", color: "#64647A" }} />
            </div>
            <p className="certified-text">Advanced Agent Certificate</p>
            <p style={{ color: "#64647A" }}>August 2016 - 2018</p>
          </div>
        </div>
      </div>
      <div style={{ width: 'fit-content', margin: '30px auto' }}>
        <div class="linkBtn">
          More News <FaAngleRight style={{ marginLeft: "8px" }} />
        </div>
      </div>
    </div>
  )
}

export default LatestUpdates