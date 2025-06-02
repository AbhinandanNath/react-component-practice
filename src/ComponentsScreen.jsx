import AccordianLandingScreen from "./components/Accordian/AccordianLandingScreen";
import FileExplorereScreen from "./components/FileExplorer/FileExplorereScreen";
import DataScreen from "./components/InfiniteScroll/DataScreen";
import LandingScreen from "./components/Pagination/LandingScreen";
import StarRating from "./components/StartRating";
import MainScreen from "./components/StepperComponent/MainScreen";
import ToastMessage from "./components/ToastMessage";

const componentsList = [
  { legendName: "Stepper", component: <MainScreen /> },
  { legendName: "Accordian", component: <AccordianLandingScreen /> },
  { legendName: "File Explorer", component: <FileExplorereScreen /> },
  { legendName: "Infinite Scroll", component: <DataScreen /> },
  { legendName: "Toast Message", component: <ToastMessage /> },
  { legendName: "Star Rating", component: <StarRating /> },
  { legendName: "Pagination", component: <LandingScreen /> },
];

function ComponentsScreen() {
  return (
    <>
      {componentsList.map(({ legendName, component }, index) => {
        return (
          <fieldset key={legendName + index} className="cardbox  applyBorder">
            <legend>{legendName}</legend>
            {component}
          </fieldset>
        );
      })}
    </>
  );
}

export default ComponentsScreen;
