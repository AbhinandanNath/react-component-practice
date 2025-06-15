import AccordianLandingScreen from "./components/Accordian/AccordianLandingScreen";
import FileExplorereScreen from "./components/FileExplorer/FileExplorereScreen";
import DataScreen from "./components/InfiniteScroll/DataScreen";
import LandingScreen from "./components/Pagination/LandingScreen";
import StarRating from "./components/StartRating";
import MainScreen from "./components/StepperComponent/MainScreen";
import ToastMessage from "./components/ToastMessage";
import CircleLandingScreen from "./components/NestedCircle/CircleLandingScreen";
import ToggleTheme from "./Design Pattern/Singelton/ToggleTheme";
import ClockLandindScreen from "./Design Pattern/Observer/ClockLandindScreen";
import VirtualizedListGrid from "./components/VirtualizedList/VirtualizedListGrid";
import TicTacToe from "./components/ticTacToe/TicTacToe";
import FileUploadScreen from "./components/File Upload/FileUploadScreen";
import ReactCarousel from "./components/React Carousel/ReactCarousel";

import SnakeScreen from "./components/Snake Game/SnakeScreen";

const componentsList = [
  {
    legendName: "Tic Tac Toe",
    component: <TicTacToe />,
    appliedClass: "cardbox rowFlexStart applyBorder",
  },
  {
    legendName: "Snake Game",
    component: <SnakeScreen />,
    appliedClass: "cardbox applyBorder",
  },
  {
    legendName: "Stepper",
    component: <MainScreen />,
    appliedClass: "cardbox rowFlexStart applyBorder",
  },
  {
    legendName: "Accordian",
    component: <AccordianLandingScreen />,
    appliedClass: "cardbox rowFlexStart colFlexStart applyBorder",
  },

  {
    legendName: "File Explorer",
    component: <FileExplorereScreen />,
    appliedClass: "cardbox rowFlexStart colFlexStart applyBorder",
  },
  {
    legendName: "Infinite Scroll",
    component: <DataScreen />,
    appliedClass: "cardbox rowFlexStart colFlexStart applyBorder",
  },
  {
    legendName: "Nested Circle",
    component: <CircleLandingScreen />,
    appliedClass: "cardbox colFlexStart applyBorder",
  },
  {
    legendName: "Virtualized List",
    component: <VirtualizedListGrid />,
    appliedClass: "cardbox rowFlexStart colFlexStart applyBorder",
  },
  {
    legendName: "React Carousel",
    component: <ReactCarousel />,
    appliedClass: "cardbox applyBorder",
  },
  {
    legendName: "Toast Message",
    component: <ToastMessage />,
    appliedClass: "cardbox applyBorder",
  },
  {
    legendName: "File Upload",
    component: <FileUploadScreen />,
    appliedClass: "cardbox colFlexStart applyBorder",
  },
  {
    legendName: "Star Rating",
    component: <StarRating />,
    appliedClass: "cardbox applyBorder",
  },
  {
    legendName: "Pagination",
    component: <LandingScreen />,
    appliedClass: "cardbox rowFlexStart applyBorder",
  },
  {
    legendName: "Singelton Theme Manager",
    component: <ToggleTheme />,
    appliedClass: "cardbox  applyBorder",
  },
  {
    legendName: "Observe Pattern Clock",
    component: <ClockLandindScreen />,
    appliedClass: "cardbox colFlexStart applyBorder",
  },
];

function ComponentsScreen() {
  return (
    <>
      {componentsList.map(({ legendName, component, appliedClass }, index) => {
        return (
          <fieldset key={legendName + index} className={appliedClass}>
            <legend>{legendName}</legend>
            {component}
          </fieldset>
        );
      })}
    </>
  );
}

export default ComponentsScreen;
