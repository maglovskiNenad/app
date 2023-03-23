import React from "react";
import { useNavigate } from "react-router-dom";

import "./ErrorPage.css";

const ErrorPage = () => {
  let navigate = useNavigate();

  const takeMeHome = () => {
    let path = "home";
    navigate(path);
  };

  return (
    <div className="error-page-wraper">
      <h1 className="error-number">404</h1>
      <div className="info">
        <h2 className="info-title">I can't find that page.</h2>
        <p>
          I'm fairly sure that page used to be here, but seems to have gone
          missing. I do apologise on it's behalf.
        </p>
      </div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="particle">4</div>
      <div className="particle">0</div>
      <div className="btn-go-back-wraper">
        <button className="btn-go-back" onClick={takeMeHome}>
          <span className="btn-text">Let's go back to earth.</span>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
