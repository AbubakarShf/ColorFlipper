import React from "react";
import "./HeaderBarStyle.css";

const HeaderBar = () => {
  return (
    <React.Fragment>
      <nav className="nav-bar">
        <div className="nav-feature">
          <h3 className="AppName">ColorFlipper</h3>
          <div className="feature-container">
            <a className="Simple">Simple</a>
            <a className="Hex">Hex</a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default HeaderBar;
