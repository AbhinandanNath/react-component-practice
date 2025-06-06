import { useState, useEffect } from "react";
import eventEmitter from "./customEventEmitter";

const AnalogClockObserver2 = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = (currentTime) => {
      setTime(currentTime);
    };

    eventEmitter.on("timeUpdate", updateTime);
    return () => {
      eventEmitter.off("timeUpdate", updateTime); // Cleanup subscription
    };
  }, []);
  return <h2>Analog Clock: {time}</h2>;
};

export default AnalogClockObserver2;
