import React, { useState, useEffect } from "react";
import "./Carousel.css";
const Carousel = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (props.images.length > 1) {
      let timer = setTimeout(() => {
        const resetAuto = currentImageIndex === props.images.length - 1;
        const index = resetAuto ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(index);
      }, 3000);
      return () => window.clearTimeout(timer);
    }
  });
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
      {props.images.length > 1 ? (
        <div className="buttons">
          <button className="next-button" onClick={(e) => nextPrev(true)}>
            &#8249;
          </button>
          <button className="prev-button" onClick={(e) => nextPrev(false)}>
            &#8250;
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default Carousel;
