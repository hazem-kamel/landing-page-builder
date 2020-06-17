import React from "react";
import "./Button.css";
const ButtonComponent = (props) => {
  console.log(props.buttons);
  return (
    <div>
      {props.buttons.map((button) => {
        {
          console.log(button);
        }
        if (button.text) {
          return (
            <div className="buttons-section-preview">
              <button
                className="button"
                style={{
                  backgroundColor: button.background,
                  color: button.color,
                }}
              >
                <a className="link" href={`https://${button.link}`}>
                  {button.text}
                </a>
              </button>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default ButtonComponent;
