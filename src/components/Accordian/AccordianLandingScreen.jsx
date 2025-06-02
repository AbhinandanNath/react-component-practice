import AccordianPanel from "./AccordianPanel";
import accordianData from "./accordianData.json";
function AccordianLandingScreen() {
  return (
    <div className="accordian-container">
      {accordianData.splice(0, 2).map((item, index) => {
        return <AccordianPanel accordianData={item} key={item + index} />;
      })}
    </div>
  );
}

export default AccordianLandingScreen;
