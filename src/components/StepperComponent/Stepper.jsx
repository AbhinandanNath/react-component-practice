import { useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

function StepperField({ currentStep, stepConfig }) {
  return (
    <div>
      {stepConfig.map((step, stepIndex) => {
        let stepNumber = stepIndex + 1;
        let isAtLastStepper = checkIsLastStep(stepIndex, stepConfig.length);
        let stepperCrossed = stepIndex < currentStep;
        let isAtTheStepper = stepIndex == currentStep;
        return (
          <div className="stepper" key={stepIndex}>
            <div
              className={`step-number ${
                stepIndex <= currentStep ? "active-current-step" : ""
              }`}
            >
              {stepNumber}
              {!isAtLastStepper && (
                <div
                  className={`step-line ${
                    stepperCrossed ? "active-current-step-line" : ""
                  }`}
                ></div>
              )}
            </div>
            <div
              className={
                isAtTheStepper
                  ? `${
                      step.label == "Submitted"
                        ? "step-content-bounce data-submitted"
                        : "step-content-bounce"
                    }`
                  : stepperCrossed
                  ? "step-content-done"
                  : ""
              }
            >
              {step.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function checkIsLastStep(currentPostion, totalSteps) {
  return currentPostion === totalSteps - 1;
}

function Stepper({ stepConfig }) {
  const { width, height } = useWindowSize();
  console.log(useWindowSize());
  const [currentStep, setCurrentStep] = useState(0);
  let totalSteps = stepConfig.length;

  let isFirstStep = Boolean(currentStep == 0);
  let isLastStep = checkIsLastStep(currentStep, totalSteps);

  function changeStep(stepAction) {
    setCurrentStep((prevState) => {
      if (stepAction == "back") {
        return prevState == 0 ? prevState : prevState - 1;
      }
      if (stepAction == "next") {
        return prevState == totalSteps ? prevState : prevState + 1;
      }
    });
  }

  return (
    <div className="step-container">
      {isLastStep && <Confetti width={width} height={height} />}
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
      <StepperField stepConfig={stepConfig} currentStep={currentStep} />
    </div>
  );
}

export default Stepper;
