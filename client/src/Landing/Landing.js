import React from "react";

const Landing = () => {
  const logoUploader = (event) => {
    console.log(event.target.files[0]);
  };
  const carouselUploader = (event) => {
    console.log(event.target.files);
  };
  return (
    <div>
      <h3>Upload your logo and text</h3>
      <label>Choose logo</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => logoUploader(e)}
      ></input>
      <label>Enter your required title</label>
      <input type="text"></input>
      <button>Enter</button>
      <div>
        <p>Choose logo style</p>
        <button>Square</button>
        <button>Flexible Width</button>
        <button>Rounded</button>
      </div>
      <div>
        <p>Change title background and text color</p>
        <button>Background</button>
        <button>Text</button>
      </div>
      <div>
        <p>Upload Carousel images</p>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => carouselUploader(e)}
        ></input>
      </div>
    </div>
  );
};
export default Landing;
