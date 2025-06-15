import ClockSubject from "./ClockSubject";
import DigitalClockObserver1 from "./DigitalClock-Observer1";
import AnalogClockObserver2 from "./AnalogClockObserver2";

function ClockLandindScreen() {
  return (
    <div className="defaultFullWidthContainer">
      <ClockSubject />
      <DigitalClockObserver1 />
      <AnalogClockObserver2 />
    </div>
  );
}

export default ClockLandindScreen;
