import React from "react";
import "./webinarsStyle.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Webinars = () => {
  return (
    <div style={{paddingTop:'50px'}}>
      <h1>Webinars & Events</h1>
      <div className="cityPc">
        <div className="city1" id="bigBox">
          <div>
            <div style={{ width: "100%" }}>
              <img
                src={require("../image/city.jpg")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt=""
              />
            </div>
            <div>
              <div style={{ width: "90%", margin: "auto", textAlign: "start" }}>
                <p className="city-date">Mar 19 · 05:00 PM to 07:30 PM</p>
                <p style={{ fontSize: "20px", lineHeight: "10px" }}>
                  USA Vertual Addmission Day
                </p>
                <p
                  style={{
                    color: "#64647A",
                    lineHeight: "22px",
                    fontSize: "15px",
                  }}
                >
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="link-btn">
                  Register Now <FaAngleRight style={{ marginLeft: "8px" }} />
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="city2" id="box1">
          <div style={{ width: "100%" }}>
            <img
              src={require("../image/webinar_city_2.png")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="city2"
            />
          </div>
          <div>
            <div
              style={{
                width: "90%",
                margin: "auto",
                textAlign: "start",
                marginTop: "25px",
              }}
            >
              <p className="city-date">Mar 19 · 05:00 PM to 07:30 PM</p>
              <p style={{ fontSize: "20px", margin: 0 }}>
                New Zealand Virtual Admissions Week
              </p>
              <p className="text-2">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="link-btn">
                Register Now <FaAngleRight style={{ marginLeft: "8px" }} />
              </div>
            </div>
            <br />
          </div>
        </div>

        <div className="city2" id="box2">
          <div style={{ width: "100%" }}>
            <img
              src={require("../image/webinar_city_3.png")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="city3"
            />
          </div>
          <div>
            <div
              style={{
                width: "90%",
                margin: "auto",
                textAlign: "start",
                marginTop: "25px",
              }}
            >
              <p className="city-date">Mar 19 · 05:00 PM to 07:30 PM</p>
              <p style={{ fontSize: "20px", margin: 0 }}>
                UK Virtual Admissions Week
              </p>
              <p className="text-2">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="link-btn">
                Register Now <FaAngleRight style={{ marginLeft: "8px" }} />
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>

      <div class='cityMobile'>

        <div style={{display:'flex', flexWrap:'nowrap',overflowX:'auto',gap:'25px', width:'90%',margin:'auto'}}>
          <div className="cityM1">
            <div>
              <div style={{ width: "100%" }}>
                <img
                  src={require("../image/city.jpg")}
                  style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius:'15px 15px 0 0' }}
                  alt=""
                />
              </div>
              <div>
                <div style={{ width: "90%", margin: "auto", textAlign: "start", }}>
                  <p className="city-date">Mar 19 · 05:00 PM to 07:30 PM</p>
                  <p style={{ fontSize: "20px", lineHeight: "10px" }}>
                    USA Vertual Addmission Day
                  </p>
                  <p
                    style={{
                      color: "#64647A",
                      lineHeight: "22px",
                      fontSize: "15px",
                    }}
                  >
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="link-btn">
                    Register Now <FaAngleRight style={{ marginLeft: "8px" }} />
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>

          <div className="cityM1">
            <div>
              <div style={{ width: "100%" }}>
                <img
                  src={require("../image/city2.jpg")}
                  style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius:'15px 15px 0 0' }}
                  alt=""
                />
              </div>
              <div>
                <div style={{ width: "90%", margin: "auto", textAlign: "start"  }}>
                  <p className="city-date">Mar 19 · 05:00 PM to 07:30 PM</p>
                  <p style={{ fontSize: "20px", lineHeight: "10px" }}>
                    USA Vertual Addmission Day
                  </p>
                  <p
                    style={{
                      color: "#64647A",
                      lineHeight: "22px",
                      fontSize: "15px",
                    }}
                  >
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="link-btn">
                    Register Now <FaAngleRight style={{ marginLeft: "8px" }} />
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>

          <div className="cityM1">
            <div>
              <div style={{ width: "100%" }}>
                <img
                  src={require("../image/city3.png")}
                  style={{ width: "100%", height: "180px", objectFit: "cover",borderRadius:'15px 15px 0 0 ' }}
                  alt=""
                />
              </div>
              <div>
                <div style={{ width: "90%", margin: "auto", textAlign: "start" }}>
                  <p className="city-date">Mar 19 · 05:00 PM to 07:30 PM</p>
                  <p style={{ fontSize: "20px", lineHeight: "10px" }}>
                    USA Vertual Addmission Day
                  </p>
                  <p
                    style={{
                      color: "#64647A",
                      lineHeight: "22px",
                      fontSize: "15px",
                    }}
                  >
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="link-btn">
                    Register Now <FaAngleRight style={{ marginLeft: "8px" }} />
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>

        </div>



      </div>
      <div style={{ width: "fit-content", margin: "30px auto" }}>
        <div className="link-btn">
          See More <FaAngleRight style={{ marginLeft: "8px" }} />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Webinars;
