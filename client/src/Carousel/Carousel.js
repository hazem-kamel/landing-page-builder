import React, { useState, useEffect } from "react";
import "./Carousel.css";
const Carousel = () => {
  const [Images, setImages] = useState([
    "https://i.insider.com/5e1452d6855cc227cd527362?width=1100&format=jpeg&auto=webp",
    "https://www.fcbarcelonanoticias.com/uploads/s1/11/83/40/0/messi-balon-oro-merece.jpeg",
    "https://s3.tvp.pl/images2/c/b/a/uid_cba846a61faa59f7a44b42a59cce22a41555576941412_width_1137_play_0_pos_0_gs_0_height_640.jpg",
    "https://pbs.twimg.com/media/EF0wMKPWoAE2XP1.jpg",
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    setAuto(true);

    setTimeout(() => {
      const resetIndex = currentImageIndex === Images.length - 1;
      const index = resetIndex ? 0 : currentImageIndex + 1;
      setCurrentImageIndex(index);
    }, 2000);
  });

  const dottedSlide = (value) => {
    setCurrentImageIndex(value);
  };

  const activeImagesFromState = Images.slice(
    currentImageIndex,
    currentImageIndex + 1
  );

  return (
    <div className="slideshow-container">
      {/* render images */}
      {activeImagesFromState.map((image, index) => (
        <img key={index} src={image} alt="" />
      ))}
      <div>
        <span className="dot" onClick={dottedSlide.bind(null, 0)}></span>
        <span className="dot" onClick={dottedSlide.bind(null, 1)}></span>
        <span className="dot" onClick={dottedSlide.bind(null, 2)}></span>
        <span className="dot" onClick={dottedSlide.bind(null, 3)}></span>
      </div>
    </div>
  );
};
export default Carousel;
