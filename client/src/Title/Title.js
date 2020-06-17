import React from "react";
import "./Title.css";
const Title = (props) => {
  return (
    <div className="title-div">
      <h3
        className="title-preview"
        style={{
          backgroundColor: props.propTitle.background.color,
          color: props.propTitle.color.color,
        }}
      >
        {props.propTitle.text}
      </h3>
    </div>
  );
};
export default Title;
