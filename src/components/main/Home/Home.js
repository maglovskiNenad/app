import React from "react";

import MainPage from "../../../UI/main-page/MainPage";
import DescriptionPage from "./description/DescriptionPage";

import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="background">
        <div className="accordion-wraper">
          <div className={"row"}>
            <div className={"col-sm-5"}>
              <div className="text-presentation">
                <DescriptionPage />
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
