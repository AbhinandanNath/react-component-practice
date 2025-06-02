import React, { useState } from "react";

function Stepper({ stepConfig }) {
  const [currentStep, setCurrentStep] = useState(0);

  let isFirstStep = Boolean(currentStep == 0);
  let isLastStep = Boolean(currentStep == stepConfig.length);

  function changeStep(stepAction) {
    setCurrentStep((prevState) => {
      if (stepAction == "back") {
        return prevState == 0 ? prevState : prevState - 1;
      } else {
        return prevState == stepConfig.length ? prevState : prevState + 1;
      }
    });
  }

  return (
    <div className="step-container">
      <div className="stepper-buttons">
        <button
          onClick={() => changeStep("back")}
          disabled={isFirstStep}
          className={`step-button ${
            isFirstStep ? "step-button-inactive" : "step-button-active"
          }`}
        >
          Back
        </button>
        <button
          onClick={() => changeStep("next")}
          disabled={isLastStep}
          className={`step-button ${
            isLastStep ? "step-button-inactive" : "step-button-active"
          }`}
        >
          Next
        </button>
      </div>

      {stepConfig.map((step, stepIndex) => {
        return (
          <div className="stepper" key={stepIndex}>
            <div
              className={`step-number ${
                stepIndex <= currentStep ? "active-current-step" : ""
              }`}
            >
              {stepIndex + 1}
              {stepIndex !== stepConfig.length - 1 && (
                <div
                  className={`step-line ${
                    stepIndex < currentStep ? "active-current-step-line" : ""
                  }`}
                ></div>
              )}
            </div>
            <div
              className={stepIndex == currentStep ? "step-content-bounce" : ""}
            >
              {step.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Stepper;
