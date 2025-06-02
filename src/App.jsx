import "./App.css";
import AccordianLandingScreen from "./components/Accordian/AccordianLandingScreen";
import FileExplorereScreen from "./components/FileExplorer/FileExplorereScreen";
import DataScreen from "./components/InfiniteScroll/DataScreen";
import LandingScreen from "./components/Pagination/LandingScreen";
import StarRating from "./components/StartRating";
import MainScreen from "./components/StepperComponent/MainScreen";
import ToastMessage from "./components/ToastMessage";

function App() {
  return (
    <div className="sixBySixContainer applyBorder">
      <fieldset className="cardbox  applyBorder">
        <legend>Toast Message</legend>
        <ToastMessage />
      </fieldset>
      <fieldset className="cardbox  applyBorder">
        <legend>Star Rating</legend>
        <StarRating />
      </fieldset>
      <fieldset className="cardbox rowFlexStart applyBorder">
        <legend>Pagination</legend>
        <LandingScreen />
      </fieldset>
      <fieldset className="cardbox rowFlexStart applyBorder">
        <legend>Stepper</legend>
        <MainScreen />
      </fieldset>
      <fieldset className="cardbox rowFlexStart colFlexStart applyBorder">
        <legend>Accordian</legend>
        <AccordianLandingScreen />
      </fieldset>
      <fieldset className="cardbox rowFlexStart colFlexStart applyBorder">
        <legend>File Explorer</legend>
        <FileExplorereScreen />
      </fieldset>
      <fieldset className="cardbox rowFlexStart colFlexStart applyBorder">
        <legend>Infinite Scroll</legend>
        <DataScreen />
      </fieldset>
    </div>
  );
}

export default App;
