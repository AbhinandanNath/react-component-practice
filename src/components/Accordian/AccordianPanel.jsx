import { useState } from "react";

function AccordianPanel({ accordianData }) {
  const [showData, setShowData] = useState(false);

  function hideCollapseMenu() {
    setShowData((prevState) => !prevState);
  }
  //    <div className="accordian-container">

  //     </div>
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
        {showData ? (
          <p onClick={hideCollapseMenu}>&#9650;</p>
        ) : (
          <p onClick={hideCollapseMenu}>&#9660;</p>
        )}
      </div>
      {showData && accordianData.answer}
    </div>
  );
}

export default AccordianPanel;
