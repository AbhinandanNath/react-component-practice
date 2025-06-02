import { styled } from "styled-components";
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const SearchInputField = styled.input`
  width: 1rem;
  height: 0.1rem;
  background-color: rgb(177, 192, 197);
  padding: 1rem;
  border: 2px solid #0d373e;
  border-radius: 0.5rem;
  color: black;
  font-weight: bold;
  box-shadow: 1px 1px 10px white;
  text-align: right;
`;
const RotateButton = styled.button`
  width: 7rem;
  height: 2.2rem;
  border-radius: 0.25rem;
  background: linear-gradient(90deg, rgb(67, 68, 69), rgb(158, 161, 162));
  border: 1px solid white;
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-shadow: 1px 1px 10px rgb(158, 161, 162);
`;
export default function CircleNumberField({
  circleNumber,
  updateCircleNumber,
  doRotation,
  isRotating,
}) {
  function updateNumber(event) {
    let inputValue = event.target?.value;
    if (isNaN(inputValue)) {
      updateCircleNumber(1);
    } else if (inputValue > 19) {
      updateCircleNumber(19);
    } else {
      updateCircleNumber(event.target.value);
    }
  }

  return (
    <SearchContainer>
      <SearchInputField
        id="circleInput"
        type="text"
        name="circleInput"
        required
        minLength="1"
        maxLength="2"
        value={circleNumber}
        onChange={updateNumber}
      />
      <RotateButton onClick={() => doRotation((r) => !r)}>
        {isRotating ? "Add Bounce" : "Add Rotation"}
      </RotateButton>
    </SearchContainer>
  );
}
