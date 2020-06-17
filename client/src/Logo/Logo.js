import React from "react";
import "./Logo.css";
const Logo = (props) => {
  if (props.logo.style === "rounded") {
    return (
      <div className="rounded-class">
        <img className="preview-logo-rounded" src={props.logo.image}></img>
      </div>
    );
  } else if (props.logo.style === "box")
    return (
      <div className="box-class">
        <img className="preview-logo-box" src={props.logo.image}></img>
      </div>
    );
  else if (props.logo.style === "normal") {
    return (
      <div className="normal-class">
        <img className="preview-logo-normal" src={props.logo.image}></img>
      </div>
    );
  } else if (props.logo.style === "") {
    return <></>;
  }
};
export default Logo;
