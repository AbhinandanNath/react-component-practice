function TicTacToeGameBoard({ board, updateBoard }) {
  return (
    <div className="gameBoard">
      {board.map((cell, index) => {
        return (
          <div
            className="gameBoardBox"
            key={index}
            onClick={() => updateBoard(index)}
          >
            {cell}
          </div>
        );
      })}
    </div>
  );
}

export default TicTacToeGameBoard;
