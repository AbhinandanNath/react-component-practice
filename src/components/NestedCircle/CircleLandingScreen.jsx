import { useState } from "react";
import { styled } from "styled-components";
import Circle from "./Circle";
import CircleNumberField from "./circleInputField";

const NestedCircleComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 23rem;
  min-height: 23rem;
`;

export default function CircleLandingScreen() {
  const [circleNumber, setCircleNumber] = useState("1");
  const [isRotating, setIsRotating] = useState(false);
  return (
    <NestedCircleComp>
      <CircleNumberField
        circleNumber={circleNumber}
        updateCircleNumber={setCircleNumber}
        doRotation={setIsRotating}
        isRotating={isRotating}
      />
      <Circle numberofCircles={circleNumber} isRotating={isRotating} />
    </NestedCircleComp>
  );
}
