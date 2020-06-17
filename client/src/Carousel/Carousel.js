import React, { useState, useEffect } from "react";
import "./Carousel.css";
const Carousel = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (props.images.length > 0) {
        const resetAuto = currentImageIndex === props.images.length;
        const index = resetAuto ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(index);
      }
    }, 2000);
  }, [props.images]);
  const nextPrev = (e) => {
    if (e) {
      const resetIndex = currentImageIndex === props.images.length - 1;
      const index = resetIndex ? 0 : currentImageIndex + 1;
      setCurrentImageIndex(index);
    } else {
      const resetPrev = currentImageIndex === 0;
      const index = resetPrev ? props.images.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(index);
    }
  };
  const activeImagesFromState = props.images.slice(
    currentImageIndex,
    currentImageIndex + 1
  );
  return (
    <div className="slideshow-container">
      {/* render images */}
      {activeImagesFromState.map((image, index) => (
        <img key={index} src={image} />
      ))}
      <div>
        <button onClick={(e) => nextPrev(true)}>Next</button>
        <button onClick={(e) => nextPrev(false)}>Previous</button>
      </div>
    </div>
  );
};
export default Carousel;
