import React, { useState } from "react";
import "./stepsStyle.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Steps = () => {
  const steps = [
    require("../image/step.png"),
    require("../image/step2.png"),
    // Add more steps as needed
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) =>
      prevStep === steps.length - 1 ? 0 : prevStep + 1
    );
  };

  const prevStep = () => {
    setCurrentStep((prevStep) =>
      prevStep === 0 ? steps.length - 1 : prevStep - 1
    );
  };

  return (
    <div className="steps-container">
      <div style={{ width: '85%', margin: 'auto' }}>

        <h2>7 Easy Steps to Land in your Dream University</h2>
      </div>
      <div class='mainSlider'>
        <div className="slider">
          <div className="slide current-slide">
            <br />
            <img src={steps[currentStep]} alt={`slider${currentStep}`} />
            <div className="step-number">{currentStep + 1}</div>
          </div>
          <div className="slide next-slide">
            <br />
            <div class="blur-overlay"></div>
            <img
              src={steps[(currentStep + 1) % steps.length]}
              alt={`slider${(currentStep + 1) % steps.length}`}
            />
            <div className="step-number">{(currentStep + 2) % steps.length || steps.length}</div>
          </div>
          <div className="fadedBox"></div>
        </div>
      </div>
      <div className="navigation-buttons">
        <div className="link-btn" onClick={prevStep}>
          <FaAngleLeft style={{ marginRight: "8px" }} />
          Previous Step
        </div>
        <div className="link-btn" onClick={nextStep}>
          Next Step <FaAngleRight style={{ marginLeft: "8px" }} />
        </div>
      </div>
    </div>
  );
};

export default Steps;
