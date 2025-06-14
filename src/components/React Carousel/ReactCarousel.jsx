import ImageConatiner from "./ImageConatiner";
import { imageData } from "./imageData";

const totalData = imageData.length - 1;

function ReactCarousel() {
  return <ImageConatiner imageData={imageData} dataLength={totalData} />;
}

export default ReactCarousel;
