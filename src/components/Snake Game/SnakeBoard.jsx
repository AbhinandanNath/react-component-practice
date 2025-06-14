import { useEffect, useRef, useState } from "react";
import { generateRandomTwoElements } from "../../util/helperMethod";
import GameOver from "./GameOver";
import SnakeBoardGrid from "./SnakeBoardGrid";

const GRID_SIZE = 15;
const GRID_BOARD = Array.from({ length: GRID_SIZE }, () =>
  Array.from({ length: GRID_SIZE }).fill("")
);

const INTIAL_SNAKE_BODY = [
  // [col,row]
  [7, 7],
  [6, 7],
];

function SnakeBoard() {
  const [snakeBody, setSnakeBody] = useState(INTIAL_SNAKE_BODY);
  const [isGameOver, setIsGameover] = useState(false);
  const intervalRef = useRef(null);
  const directionRef = useRef([1, 0]);
  const snakeClass = useRef("horizontalSnake");
  const foodRef = useRef(generateRandomTwoElements(GRID_SIZE));

  function isSnakeBody(xCord, yCord) {
    return snakeBody.some(([x, y]) => {
      return x === xCord && y === yCord;
    });
  }

  function restartGame() {
    setIsGameover(false);
    directionRef.current = [1, 0];
    setSnakeBody(INTIAL_SNAKE_BODY);
  }

  function changeDirection(e) {
    // Prevent page scroll for arrow keys
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
    }
    let keyValue = e.key;
    if (keyValue === "ArrowUp" && directionRef.current[1] !== 1) {
      snakeClass.current = "verticalSnake";
      directionRef.current = [0, -1];
    } else if (keyValue === "ArrowDown" && directionRef.current[1] !== -1) {
      directionRef.current = [0, 1];
      snakeClass.current = "verticalSnake";
    } else if (keyValue === "ArrowLeft" && directionRef.current[0] !== 1) {
      directionRef.current = [-1, 0];
      snakeClass.current = "horizontalSnake";
    } else if (keyValue === "ArrowRight" && directionRef.current[0] !== -1) {
      directionRef.current = [1, 0];
      snakeClass.current = "horizontalSnake";
    }
  }

  function checkIsTailHeadColliding(snakeBody, newXposition, newYposition) {
    return snakeBody.some(([x, y]) => {
      return x === newXposition && y === newYposition;
    });
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSnakeBody((prevBodyState) => {
        const newSnakeHeadPosition = [
          prevBodyState[0][0] + directionRef.current[0],
          prevBodyState[0][1] + directionRef.current[1],
        ];

        if (
          newSnakeHeadPosition[0] >= GRID_SIZE ||
          newSnakeHeadPosition[0] < 0 ||
          newSnakeHeadPosition[1] >= GRID_SIZE ||
          newSnakeHeadPosition[1] < 0 ||
          checkIsTailHeadColliding(
            prevBodyState,
            newSnakeHeadPosition[0],
            newSnakeHeadPosition[1]
          )
        ) {
          clearInterval(intervalRef.current);
          setIsGameover(true);
        }
        let updatedBodyState = [...prevBodyState].map((item) => [...item]);
        if (
          newSnakeHeadPosition[0] === foodRef.current[0] &&
          newSnakeHeadPosition[1] == foodRef.current[1]
        ) {
          foodRef.current = generateRandomTwoElements(GRID_SIZE);
        } else {
          updatedBodyState.pop(); // poping the last element
        }

        updatedBodyState.unshift(newSnakeHeadPosition); // adding the next row
        return updatedBodyState;
      });
    }, 500);

    window.addEventListener("keydown", changeDirection);

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("keydown", changeDirection);
    };
  }, [isGameOver]);
  return (
    <div className="snake-board-container applyBorder">
      {isGameOver ? (
        <GameOver restartGame={restartGame} />
      ) : (
        <SnakeBoardGrid
          foodRef={foodRef}
          GRID_BOARD={GRID_BOARD}
          isSnakeBody={isSnakeBody}
        />
      )}
    </div>
  );
}

export default SnakeBoard;
