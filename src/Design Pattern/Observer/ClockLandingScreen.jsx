import ClockSubject from "./ClockSubject";
import DigitalClockObserver1 from "./DigitalClock-Observer1";
import AnalogClockObserver2 from "./AnalogClockObserver2";

function CLockLandingScreen() {
  return (
    <div>
      <ClockSubject />
      <DigitalClockObserver1 />
      <AnalogClockObserver2 />
    </div>
  );
}

export default CLockLandingScreen;
