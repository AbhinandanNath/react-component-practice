import { useCallback, useEffect, useRef, useState } from "react";

function ImageConatiner({ imageData, dataLength }) {
  const [imageIndex, setImageIndex] = useState(0);

  let intervalRef = useRef();

  const nextImage = useCallback(() => {
    setImageIndex((prevImageIndex) => {
      if (prevImageIndex == dataLength) {
        return 0;
      } else {
        return prevImageIndex + 1;
      }
    });
  }, [dataLength]);

  const previousImage = useCallback(() => {
    setImageIndex((prevImageIndex) => {
      if (prevImageIndex == 0) {
        return dataLength;
      } else {
        return prevImageIndex - 1;
      }
    });
  }, [dataLength]);

  const startImageChange = useCallback(
    (direction) => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      if (direction == "next") {
        intervalRef.current = setInterval(nextImage, 3000);
      } else {
        intervalRef.current = setInterval(previousImage, 3000);
      }
    },
    [nextImage, previousImage]
  );

  const stopImageChange = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    startImageChange();
    return stopImageChange;
  }, [stopImageChange, startImageChange]);

  return (
    <div
      className="carousel-image-container"
      onMouseEnter={stopImageChange}
      onMouseLeave={() => startImageChange("next")}
    >
      <button className="carousel-left-btn" onClick={nextImage}>
        {"<"}
      </button>
      <img
        className={`carousel-image`}
        src={imageData[imageIndex].download_url}
        alt={imageData[imageIndex].author}
      />
      <button className="carousel-right-btn" onClick={previousImage}>
        {">"}
      </button>
    </div>
  );
}

export default ImageConatiner;
