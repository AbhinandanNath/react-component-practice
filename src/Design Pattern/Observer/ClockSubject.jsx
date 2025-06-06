import { useEffect, useRef, useState } from "react";
import eventEmitter from "./customEventEmitter";

function ClockSubject() {
  const [currentTimerValue, setCurrentTimerValue] = useState(
    new Date().toLocaleTimeString()
  );
  const intervalRef = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const currentTime = new Date().toLocaleTimeString();
  //     eventEmitter.emit("timeUpdate", currentTime); // Notify observers
  //   }, 1000);

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  useEffect(() => {
    // Cleanup on unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  function emitEvent() {
    const now = new Date().toLocaleTimeString();
    setCurrentTimerValue(now);
    eventEmitter.emit("timeUpdate", now);
  }

  function emitOnce() {
    clearInterval(intervalRef.current);
    emitEvent();
  }

  function emitContinuous() {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      emitEvent();
    }, 1000);
  }

  return (
    <div className="accordian-panel">
      {currentTimerValue}
      <button className="themeToggleButton" onClick={emitOnce}>
        Emit Once
      </button>
      <button className="themeToggleButton" onClick={emitContinuous}>
        Continuously
      </button>
    </div>
  );
}

export default ClockSubject;
