import Stepper from "./Stepper";

const stepperSteps = [
  { label: "PersonalInfo", content: "Enter your personal information." },
  { label: "Account Info", content: "Enter your shipping address." },
  { label: "Confirmation", content: "Make payment." },
  { label: "Review", content: "Confirmation and receipt." },
];

export default function MainScreen() {
  return <Stepper stepConfig={stepperSteps} />;
}
