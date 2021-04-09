import React, { useState } from "react";
import "./BodyContainerStyle.css";
const BodyContainer = () => {
  const [CHexColor, setCHexColor] = useState("#F1F5F8");
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }

  const ColorSwitcher = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }
    setCHexColor(hexColor);
  };
  return (
    <React.Fragment>
      <main style={{ backgroundColor: CHexColor }}>
        <div className="container">
          <div className="color-container">
            <h3 className="info-container">
              Background Color :<span> {CHexColor}</span>
            </h3>
          </div>
          <button onClick={() => ColorSwitcher()} className="click-me">
            Click Me
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default BodyContainer;
