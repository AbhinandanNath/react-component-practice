import AccordianLandingScreen from "./components/Accordian/AccordianLandingScreen";
import FileExplorereScreen from "./components/FileExplorer/FileExplorereScreen";
import DataScreen from "./components/InfiniteScroll/DataScreen";
import LandingScreen from "./components/Pagination/LandingScreen";
import StarRating from "./components/StartRating";
import MainScreen from "./components/StepperComponent/MainScreen";
import ToastMessage from "./components/ToastMessage";
import CircleLandingScreen from "./components/NestedCircle/CircleLandingScreen";

const componentsList = [
  {
    legendName: "Stepper",
    component: <MainScreen />,
    class: "cardbox rowFlexStart applyBorder",
  },
  {
    legendName: "Accordian",
    component: <AccordianLandingScreen />,
    class: "cardbox rowFlexStart colFlexStart applyBorder",
  },
  {
    legendName: "File Explorer",
    component: <FileExplorereScreen />,
    class: "cardbox rowFlexStart colFlexStart applyBorder",
  },
  {
    legendName: "Infinite Scroll",
    component: <DataScreen />,
    class: "cardbox rowFlexStart colFlexStart applyBorder",
  },
  {
    legendName: "Nested Circle",
    component: <CircleLandingScreen />,
    class: "cardbox rowFlexStart colFlexStart applyBorder",
  },
  {
    legendName: "Toast Message",
    component: <ToastMessage />,
    class: "cardbox applyBorder",
  },
  {
    legendName: "Star Rating",
    component: <StarRating />,
    class: "cardbox applyBorder",
  },
  {
    legendName: "Pagination",
    component: <LandingScreen />,
    class: "cardbox rowFlexStart applyBorder",
  },
];

function ComponentsScreen() {
  return (
    <>
      {componentsList.map(({ legendName, component, className }, index) => {
        return (
          <fieldset key={legendName + index} className={className}>
            <legend>{legendName}</legend>
            {component}
          </fieldset>
        );
      })}
    </>
  );
}

export default ComponentsScreen;
