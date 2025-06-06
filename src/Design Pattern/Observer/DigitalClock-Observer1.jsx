import { useEffect, useState } from "react";
import eventEmitter from "./customEventEmitter";

const DigitalClockObserver1 = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = (currentTime) => {
      //console.log("DigitalClockObserver1 received timeUpdate:", currentTime); // Debug log
      setTime(currentTime);
    };

    eventEmitter.on("timeUpdate", updateTime);
    return () => {
      eventEmitter.off("timeUpdate", updateTime); // Cleanup subscription
    };
  }, []);

  return <h2>Digital Clock: {time}</h2>;
};

export default DigitalClockObserver1;
