import React, { Suspense, useState } from "react";
const SnakeBoard = React.lazy(() => import("./SnakeBoard"));
function SnakeScreen() {
  const [loadGameBoard, setLoadGameBoard] = useState(false);

  return (
    <div className="defaultFullWidthContainer">
      <button
        className="tic-tac-toe-btn active-pagination-button applyBorder"
        onClick={() => setLoadGameBoard((prevState) => !prevState)}
      >
        {loadGameBoard ? "Stop" : "Start"}
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        {loadGameBoard ? (
          <SnakeBoard />
        ) : (
          <div className="tic-tac-toe-winner">
            <span>Click to Start the Game</span>
          </div>
        )}
      </Suspense>
    </div>
  );
}

export default SnakeScreen;
