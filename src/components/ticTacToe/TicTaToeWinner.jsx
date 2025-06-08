import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
function TicTaToeWinner({ winner, restart }) {
  const { width, height } = useWindowSize();
  let winningText = winner == "Draw" ? "Its a Draw !!" : `User "${winner}" Won`;
  let didWon = Boolean(winner !== "Draw");
  return (
    <div className="tic-tac-toe-winner">
      {didWon && <Confetti width={width} height={height} />}
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
