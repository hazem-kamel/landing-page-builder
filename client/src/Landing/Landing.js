import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import Logo from "../Logo/Logo";
import Carousel from "../Carousel/Carousel";
import axios from "axios";
const Landing = () => {
  const [logoImg, logoUpdater] = useState();
  const [title, updateTitle] = useState("");
  const [carouselImages, carouselImagesUpdater] = useState([]);
  useEffect(
    (e) => {
      if (carouselImages.length > 0) {
      }
    },
    [carouselImages]
  );
  var apiUrl = "https://api.imgur.com/3/image";
  const logoUploader = (event) => {
    const img = event.target.files[0];
    logoUpdater(URL.createObjectURL(img));
    const data = new FormData();
    data.append("image", img);
    const config = {
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        Authorization: "Client-ID 5a3f182d21fbdfc",
      },
    };
    axios
      .post(apiUrl, data, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const carouselUploader = (e) => {
    backendCarousel(e);
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      carouselImagesUpdater((carouselImages) => [
        ...carouselImages,
        event.target.result,
      ]);
    });
    reader.readAsDataURL(e.target.files[0]);
  };
  const backendCarousel = (e) => {
    const imgCarousel = e.target.files[0];
    const data = new FormData();
    data.append("image", imgCarousel);
    const config = {
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        Authorization: "Client-ID 5a3f182d21fbdfc",
      },
    };
    axios
      .post(apiUrl, data, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const titleFunction = () => {};
  return (
    <div>
      <h3>Upload your logo and text</h3>
      <label>Choose logo</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => logoUploader(e)}
      ></input>
      <img className="logo-uploaded" src={logoImg}></img>
      <label>Enter your required title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => updateTitle(e.target.value)}
      ></input>
      <button onClick={(e) => titleFunction()}>Enter</button>
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
          multiple
          onChange={(e) => carouselUploader(e)}
        ></input>
      </div>
      <div>
        <Logo logo={logoImg} />
        <Title title={title} />
        <Carousel images={carouselImages} />
      </div>
    </div>
  );
};
export default Landing;
