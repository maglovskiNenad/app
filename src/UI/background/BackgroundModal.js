import React from "react";
import ReactDOM from "react-dom";

import "./BackgroundModal.css";

const BackdropOverlay = (props) => {
  return (
    <div className="overlay-background border-style">
      <div className="text-wraper container">
        <div className="animated-text text-style typewriter">
          <span>console.log("Hello World")</span>
        </div>
      </div>
    </div>
  );
};

const portalElements = document.getElementById("overlays");

const BackgroundModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackdropOverlay />, portalElements)}
    </React.Fragment>
  );
};

export default BackgroundModal;
