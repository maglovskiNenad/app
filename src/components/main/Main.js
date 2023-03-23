import React, { useEffect, useState } from "react";

import BackgroundModal from "../../UI/background/BackgroundModal";

import "./Main.css";

const Main = () => {
  const [timeToRemoveBackground, setTimeToRemoveBackground] = useState(true);

  const removingBackgound = () => {
    setTimeToRemoveBackground(false);
  };

  useEffect(() => {
    setTimeout(removingBackgound, 2100);
  }, [setTimeToRemoveBackground]);
  return (
    <React.Fragment>
      {timeToRemoveBackground ? <BackgroundModal /> : ""}
    </React.Fragment>
  );
};

export default Main;
