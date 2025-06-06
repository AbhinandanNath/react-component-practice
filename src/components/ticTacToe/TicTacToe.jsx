import { useState } from "react";
import TicTacToeGameBoard from "./TicTacToeGameBoard";
import UserInfo from "./UserInfo";
import TicTaToeWinner from "./TicTaToeWinner";

// const gameBoard = Array.from({length : 9}, (_,i) => i);

const gameBoard = Array(9).fill(null);

function TicTacToe() {
  const [currrentUser, setCurrentUser] = useState("X");
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState([...gameBoard]);

  function checkWinner(board) {
    const winningCombinations = [
      // rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return the winner symbol ("X" or "O")
      }
    }

    if (board.every((cell) => cell !== null)) {
      return "Draw";
    }
    return null;
  }

  function resetBoard() {
    setBoard([...gameBoard]);
    setCurrentUser("X");
    setWinner(null);
  }

  function updateBoard(boxIndex) {
    setBoard((prevState) => {
      let updateBoard = [...prevState];
      if (!updateBoard[boxIndex]) {
        updateBoard[boxIndex] = currrentUser;
        let didWin = checkWinner(updateBoard);
        if (!didWin) {
          setCurrentUser((prevUserState) => {
            return prevUserState == "X" ? "O" : "X";
          });
        } else {
          setWinner(didWin);
        }
      }
      return updateBoard;
    });
  }

  // useEffect(() => {
  //   resetBoard();
  // }, [winner]);
  return (
    <div className="tic-tac-toe">
      {winner ? (
        <TicTaToeWinner winner={winner} restart={resetBoard} />
      ) : (
        <>
          <TicTacToeGameBoard board={board} updateBoard={updateBoard} />
          <UserInfo resetBoard={resetBoard} currrentUser={currrentUser} />
        </>
      )}
    </div>
  );
}

export default TicTacToe;
