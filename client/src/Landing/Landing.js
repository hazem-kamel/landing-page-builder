import React, { useState, useEffect } from "react";
import { GithubPicker } from "react-color";
import { useHistory } from "react-router-dom";
import ButtonComponent from "../Button/Buttons";
import Title from "../Title/Title";
import Logo from "../Logo/Logo";
import Carousel from "../Carousel/Carousel";
import axios from "axios";
import "./Landing.css";
import io from "socket.io-client";

const Landing = (props) => {
  const [showElemntButton, ShowingButton] = useState(false);
  const [logoImg, logoUpdater] = useState({
    image: "",
    link: "",
    style: "",
  });
  const [titleUser, titleUserUpdater] = useState({
    text: "",
    color: "",
    background: "",
  });
  const [button, addButton] = useState({
    text: "",
    link: "",
    color: "",
    background: "",
  });
  //const socket = io();
  const [allButtons, addAllButtons] = useState([{}]);
  const [carouselImages, carouselImagesUpdater] = useState([]);
  const [logoURL, logoURLUpdater] = useState("");
  const [carouselURL, carouselURLUpdater] = useState([""]);
  useEffect((e) => {
    // socket.emit("title", titleUser);
    //socket.emit("buttons", allButtons);
    // socket.emit("carousel", carouselURL);
    //socket.emit("logo", logoURL);
  }, []);
  var apiUrl = "https://api.imgur.com/3/image";
  const logoUploader = (event) => {
    const img = event.target.files[0];
    logoUpdater({
      ...logoImg,
      image: `${URL.createObjectURL(img)}`,
      style: "normal",
    });
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
      .then((res) => logoURLUpdater(res.data.data.link))
      .catch((err) => console.log(err));
  };
  const logoStyle = (e) => {
    if (e === "rounded") {
      logoUpdater({ ...logoImg, style: "rounded" });
    } else if (e === "box") {
      logoUpdater({ ...logoImg, style: "box" });
    } else {
      logoUpdater({ ...logoImg, style: "normal" });
    }
  };
  const colorFunction = (e) => {
    var color = e.hex;
    titleUserUpdater({ ...titleUser, color: { color } });
  };
  const backgroundFunction = (e) => {
    var color = e.hex;
    titleUserUpdater({ ...titleUser, background: { color } });
  };
  const addButtons = (e) => {
    var buttonadded = button;
    ShowingButton(false);
    addAllButtons((allButtons) => [...allButtons, buttonadded]);
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
      .then((res) => {
        carouselURLUpdater([...carouselURL, res.data.data.link]);
      })
      .catch((err) => console.log(err));
  };
  const history = useHistory();
  return (
    <div className="main-landing">
      <div className="main-logo-title">
        <div className="logo-section-main">
          <label style={{ marginBottom: "10px", fontWeight: "bolder" }}>
            Choose logo
          </label>
          <input
            type="file"
            accept="image/*"
            style={{ marginTop: "10px" }}
            onChange={(e) => logoUploader(e)}
          ></input>
          <div>
            <p>Choose logo style</p>
            <button onClick={(e) => logoStyle("box")}>Square</button>
            <button onClick={(e) => logoStyle("rounded")}>Rounded</button>
            <button onClick={(e) => logoStyle("normal")}>Flexible Width</button>
          </div>
        </div>
        <div className="title-section-main">
          <label style={{ fontWeight: "bolder" }}>
            Enter your required title
          </label>
          <input
            type="text"
            value={titleUserUpdater.text}
            onChange={(e) =>
              titleUserUpdater({ ...titleUser, text: `${e.target.value}` })
            }
          ></input>
          <div className="color-picker-title">
            <label>Title's background</label>
            <GithubPicker
              color="#fff"
              onChangeComplete={(e) => colorFunction(e)}
            />
            <label>Title's color</label>

            <GithubPicker
              color="#fff"
              onChangeComplete={(e) => backgroundFunction(e)}
            />
          </div>
        </div>
      </div>
      <div>
        <h3>Upload Carousel images</h3>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => carouselUploader(e)}
        ></input>
      </div>
      <button className="main-add-button" onClick={(e) => ShowingButton(true)}>
        Add Buttons
      </button>
      {showElemntButton ? (
        <div className="buttons-preview-section">
          <h3>Add buttons </h3>
          <label style={{ margin: "30px;", fontWeight: "bold" }}>
            Button's text
          </label>
          <input
            onChange={(e) =>
              addButton({ ...button, text: `${e.target.value}` })
            }
            type="text"
          ></input>
          <label style={{ margin: "30px;", fontWeight: "bold" }}>
            Button's link
          </label>
          <input
            type="text"
            onChange={(e) =>
              addButton({ ...button, link: `${e.target.value}` })
            }
          ></input>
          <p>Choose Button's colors</p>
          <label>Text's Color</label>
          <GithubPicker
            color="#fff"
            onChangeComplete={(e) =>
              addButton({ ...button, color: `${e.hex}` })
            }
          ></GithubPicker>
          <label>Background's Color</label>
          <GithubPicker
            color="#fff"
            onChangeComplete={(e) =>
              addButton({ ...button, background: `${e.hex}` })
            }
          ></GithubPicker>
          <button className="adding-button" onClick={(e) => addButtons()}>
            ADD
          </button>
        </div>
      ) : null}
      {
        //onClick={(e) => history.push("/preview")}
      }
      <div className="main-preview">
        <Logo logo={logoImg} />
        <Title propTitle={titleUser} />
        <Carousel images={carouselImages} />
        <ButtonComponent buttons={allButtons} />
      </div>
    </div>
  );
};
export default Landing;
