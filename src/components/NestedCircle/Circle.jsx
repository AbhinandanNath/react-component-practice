import { styled } from "styled-components";
const CircleContainer = styled.div`
  margin: auto;
`;
const CircleComp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 0.2rem solid transparent;
  background: linear-gradient(black, black) padding-box,
    linear-gradient(0deg, red, blue) border-box;
  animation: ${({ $isRotating }) =>
    $isRotating ? "rotate 2s linear infinite" : "scale 4s linear infinite"};

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes scale {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;
export default function Circle({ numberofCircles, isRotating }) {
  let circleStyle = {
    width: `${numberofCircles * 2.5}rem`,
    height: `${numberofCircles * 2.5}rem`,
  };
  return (
    <CircleContainer>
      <CircleComp style={circleStyle} $isRotating={isRotating}>
        {numberofCircles > 1 ? (
          <Circle
            numberofCircles={numberofCircles - 1}
            isRotating={isRotating}
          />
        ) : (
          ""
        )}
      </CircleComp>
    </CircleContainer>
  );
}
