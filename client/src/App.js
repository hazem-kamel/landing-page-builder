import React from "react";
import "./App.css";
import Landing from "./Landing/Landing";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">AppGain</h1>
        <img
          src="https://res.cloudinary.com/appgain/image/upload/v1534373384/appgain/logo.png"
          className="App-logo"
          alt="logo"
        ></img>
      </header>
      <Landing />
    </div>
  );
}
export default App;
