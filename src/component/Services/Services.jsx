import React from "react";
import "./servicesStyle.css";
import { FaStar } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <div className="box">
        <h1>Services we provide</h1>
        <div className="services">
          {/* <div> */}
          <div className="service-tab">
            <div>
              <svg
                width="25"
                height="30"
                viewBox="0 0 28 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.57143 21.3571V18.1429M9.57143 18.1429V7.42857C9.57143 6.2451 10.5308 5.28571 11.7143 5.28571C12.8978 5.28571 13.8571 6.2451 13.8571 7.42857V16H21.042C22.9913 16 24.5714 17.5802 24.5714 19.5294V21.3571C24.5714 26.6827 20.2542 31 14.9286 31H13.8571C9.12327 31 5.28571 27.1624 5.28571 22.4286C5.28571 20.0616 7.20449 18.1429 9.57143 18.1429ZM17.0714 11.7143H21.3571C24.3158 11.7143 26.7143 9.31581 26.7143 6.35714C26.7143 3.39847 24.3158 1 21.3571 1H6.35714C3.39847 1 1 3.39847 1 6.35714C1 9.31581 3.39847 11.7143 6.35714 11.7143"
                  stroke="#FDAF4D"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div>
              <p>Test Preparing & Coaching</p>
            </div>
          </div>

          <div className="service-tab">
            <div>
              <svg
                width="26"
                height="30"
                viewBox="0 0 28 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.8655 18.1428C16.2328 18.1428 18.154 16.2228 18.154 13.8571C18.154 11.4914 16.2328 9.57139 13.8655 9.57139C11.4983 9.57139 9.57702 11.4914 9.57702 13.8571C9.57702 16.2228 11.4983 18.1428 13.8655 18.1428Z"
                  stroke="#FF7361"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.7311 13.8571C26.7311 24.5714 16.0098 31 13.8655 31C11.7213 31 1 24.5714 1 13.8571C1 6.7578 6.76161 1 13.8655 1C20.9694 1 26.7311 6.7578 26.7311 13.8571Z"
                  stroke="#FF7361"
                  stroke-width="2"
                  stroke-linecap="square"
                />
              </svg>
            </div>
            <div>
              <p>Course, Country & University Selection</p>
            </div>
          </div>

          <div className="service-tab">
            <div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.2857 22.4286V31L24.5714 27.7857L28.8571 31V22.4286M31 10.6429V3.14286C31 1.95939 30.0406 1 28.8571 1H3.14286C1.95939 1 1 1.95939 1 3.14286V28.8571C1 30.0406 1.95939 31 3.14286 31H17.0714M6.35714 9.57143H17.0714M6.35714 16H12.7857M24.5714 24.5714C21.021 24.5714 18.1429 21.6933 18.1429 18.1429C18.1429 14.5925 21.021 11.7143 24.5714 11.7143C28.1218 11.7143 31 14.5925 31 18.1429C31 21.6933 28.1218 24.5714 24.5714 24.5714Z"
                  stroke="#226CF5"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <p>Application Assistance</p>
            </div>
          </div>

          <div className="service-tab">
            <div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 20.9375L11.3645 23.5L12.25 18.0725L8.5 14.2291L13.6823 13.4379L16 8.5L18.3177 13.4379L23.5 14.2291L19.75 18.0725L20.6355 23.5L16 20.9375Z"
                  stroke="#6C48F0"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 16C1 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16Z"
                  stroke="#6C48F0"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <p>Scholarships</p>
            </div>
          </div>
        </div>

        <div style={{ margin: "25px auto" }}>
          <button className="enquire-button-service">Enquire Now</button>
        </div>
      </div>

      <div className="services-text" style={{ marginTop: "50px" }}>
        <div>
          <img src={require("../image/services.png")} width="100%" alt="" />
        </div>
        <div style={{ alignItems: "center", padding: "25px" }}>
          <div style={{ textAlign: "start", margin: "auto" }}>
            <p className="text-heading">
              Realize your global ambitions with us
            </p>
            <p style={{ lineHeight: "22px", fontSize: "15px" }}>
              With a keen ear for your choices and preferences, our counselling
              experience is so seamless that you will land in your dream
              university even before you do!
            </p>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <div className="star-icon">
                <FaStar color="#FDAF4D" />
              </div>
              <p className="pointer-text">
                Virtual & In Person Coaching and Counselling
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <div className="star-icon">
                <FaStar color="#FDAF4D" />
              </div>
              <p className="pointer-text">
                Comprehensive Assistance for Applications
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <div className="star-icon">
                <FaStar color="#FDAF4D" />
              </div>
              <p className="pointer-text">
                High Value Scholarships and Study Loans
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
