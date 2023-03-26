import React from "react";
import "./DescriptionPage.css";

const DescriptionPage = () => {
  return (
    <React.Fragment>
      <div className="description-text">
        <p className="hello-text">Hey I am Front-end Developer</p>
        <hr />
        <p className="main-text">
          I come from a small but very beautiful town by name Novi Sad.It is
          very beautiful but I am currently positioned in Germany,Frankfurt am
          Main. And i think it is very nice town.
          <p className="main-text">
            First my project is this small personal web page that I realy hope
            that you like it. Unfortunately it is not finished and I promise
            that it will be finished very soon. So we can colaberate.
          </p>
        </p>
        <p className="programs-description">
          I independently learned to work with the following programs:
          <p className="programs">
            JavaScript, Phyton, TipeScript, GitHub, HTML, SCSS,CSS, Bootstrap
            <hr />
          </p>
        </p>
      </div>
    </React.Fragment>
  );
};

export default DescriptionPage;
