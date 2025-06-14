import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function GameOver({ restartGame }) {
  const { width, height } = useWindowSize();

  return (
    <div className="tic-tac-toe-winner">
      <Confetti width={width} height={height} />
      <span>Game Over</span>
      <button
        className="tic-tac-toe-btn winner-restart-btn applyBorder"
        onClick={restartGame}
      >
        Restart
      </button>
    </div>
  );
}

export default GameOver;
