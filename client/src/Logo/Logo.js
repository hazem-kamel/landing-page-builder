import React from "react";

const Logo = (props) => {
  return (
    <div>
      {props.logo ? (
        <img className="preview-logo" src={props.logo}></img>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Logo;
