import React from "react";

function UserInfo({ resetBoard, currrentUser }) {
  return (
    <div className="tic-tac-toe-user-box">
      <button
        onClick={resetBoard}
        className="tic-tac-toe-btn active-pagination-button applyBorder"
      >
        Reset
      </button>
      <div className="gameBoard-currentUser">Current User : {currrentUser}</div>
    </div>
  );
}

export default UserInfo;
