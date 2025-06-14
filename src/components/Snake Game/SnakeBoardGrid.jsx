function SnakeBoardGrid({ GRID_BOARD, foodRef, isSnakeBody }) {
  return (
    <div className="snake-board">
      {GRID_BOARD.map((row, yCord) =>
        row.map((col, xCord) => {
          let isSnakeCell = isSnakeBody(xCord, yCord);
          let isFoodCell =
            foodRef.current[0] == xCord && foodRef.current[1] == yCord;
          return (
            <div className={`snake-cell`} key={xCord + "-" + yCord}>
              <div
                className={`${
                  isSnakeCell ? `snake` : isFoodCell ? "food" : ""
                }`}
              >
                {col}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default SnakeBoardGrid;
