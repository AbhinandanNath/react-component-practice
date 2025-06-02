import { useState } from "react";

function AccordianPanel({ accordianData, hideButtons }) {
  const [showData, setShowData] = useState(false);

  function hideCollapseMenu() {
    setShowData((prevState) => !prevState);
  }

  function CollapseExpandButton() {
    return (
      <>
        {showData ? (
          <p onClick={hideCollapseMenu}>&#9650;</p>
        ) : (
          <p onClick={hideCollapseMenu}>&#9660;</p>
        )}
      </>
    );
  }

  return (
    <div
      className={`accordian-panel-container ${
        showData ? "accordian-panel-expand" : "accordian-panel-collapse"
      } applyBorder`}
    >
      <div
        key={accordianData.question.replace(" ", "")}
        className="accordian-panel"
      >
        <p>{accordianData.question}</p>
        {!hideButtons && <CollapseExpandButton />}
      </div>
      {showData && accordianData.answer}
    </div>
  );
}

export default AccordianPanel;
