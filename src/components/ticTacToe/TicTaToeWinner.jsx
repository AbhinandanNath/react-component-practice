import React from "react";

function TicTaToeWinner({ winner, restart }) {
  let winningText = winner == "Draw" ? "Its a Draw !!" : `User "${winner}" Won`;
  return (
    <div className="tic-tac-toe-winner">
      <span>{winningText}</span>
      <button
        className="tic-tac-toe-btn winner-restart-btn applyBorder"
        onClick={restart}
      >
        Restart
      </button>
    </div>
  );
}

export default TicTaToeWinner;
