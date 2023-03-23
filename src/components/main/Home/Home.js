import React from "react";
import MainPage from "../../../UI/main-page/MainPage";

import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="background">
        <div className="accordion-wraper">
          <div className={"row"}>
            <div className={"col-sm-6"}>
              <div className="text-presentation">
                <p>Hey I am Front-end Developer</p>
              </div>
            </div>
            <div className={"col-sm-6"}>
              <MainPage />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
