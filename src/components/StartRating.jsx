import { useState } from "react";
import { Toast } from "./ToastMessage";

// const starData = Array(10).fill("0");

export default function StarRating() {
  const [starInput, setStartInput] = useState(5);
  const [selectedStarState, setSelectedStarState] = useState(0);
  const [hoverdStarState, setHoveredStarState] = useState(0);

  // console.log(selectedStarState);

  function updateStarOnInput(starValue) {
    setHoveredStarState(0);
    setSelectedStarState(0);
    setStartInput(starValue);
  }

  return (
    <div className="starRating-container">
      <StartCountInput
        starInput={starInput}
        updateStarOnInput={updateStarOnInput}
      />
      <div>
        {Array(starInput)
          .fill("0")
          .map((item, index) => {
            let defaultClass = "starSymbol";
            if (hoverdStarState == 0 && index < selectedStarState) {
              defaultClass = "starSymbol goldenStar";
            }
            if (index < hoverdStarState) {
              defaultClass = "starSymbol goldenStar";
            }
            return (
              <span
                key={item + index}
                className={defaultClass}
                onClick={() => setSelectedStarState(index + 1)}
                onMouseEnter={() => setHoveredStarState(index + 1)}
                onMouseLeave={() => setHoveredStarState(0)}
              >
                &#9733;
              </span>
            );
          })}
      </div>
    </div>
  );
}

export function StartCountInput({ updateStarOnInput, starInput }) {
  function updateStarNumber(e) {
    updateStarOnInput(Number(e.target.value));
  }
  return (
    <div className="starInputContainer">
      <label htmlFor="circleInput">Number of Stars : </label>
      <input
        id="starInput"
        type="number"
        className="starInputField"
        min="5"
        max="10"
        value={starInput}
        onChange={updateStarNumber}
      ></input>
    </div>
  );
}
