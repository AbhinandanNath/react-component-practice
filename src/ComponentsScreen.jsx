import AccordianLandingScreen from "./components/Accordian/AccordianLandingScreen";
import FileExplorereScreen from "./components/FileExplorer/FileExplorereScreen";
import DataScreen from "./components/InfiniteScroll/DataScreen";
import LandingScreen from "./components/Pagination/LandingScreen";
import StarRating from "./components/StartRating";
import MainScreen from "./components/StepperComponent/MainScreen";
import ToastMessage from "./components/ToastMessage";
import CircleLandingScreen from "./components/NestedCircle/CircleLandingScreen";
import ToggleTheme from "./Design Pattern/Singelton/ToggleTheme";
import CLockLandingScreen from "./Design Pattern/Observer/CLockLandingScreen";
import VirtualizedListGrid from "./components/VirtualizedList/VirtualizedListGrid";
import TicTacToe from "./components/ticTacToe/TicTacToe";
import FileUploadScreen from "./components/File Upload/FileUploadScreen";

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
    legendName: "Tic Tac Toe",
    component: <TicTacToe />,
    class: "cardbox rowFlexStart applyBorder",
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
    legendName: "Virtualized List",
    component: <VirtualizedListGrid />,
    class: "cardbox rowFlexStart colFlexStart applyBorder",
  },
  {
    legendName: "Toast Message",
    component: <ToastMessage />,
    class: "cardbox applyBorder",
  },
  {
    legendName: "File Upload",
    component: <FileUploadScreen />,
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
  {
    legendName: "Singelton Theme Manager",
    component: <ToggleTheme />,
    class: "cardbox rowFlexStart applyBorder",
  },
  {
    legendName: "Observe Pattern Clock",
    component: <CLockLandingScreen />,
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
