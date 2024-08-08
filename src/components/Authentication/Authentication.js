import { useState } from "react";

import { Popup } from "./Popup/Popup";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";

import { SwitchOptions } from "./switchOptions";

import styles from "./Authentication.module.css";

export const Authentication = () => {
  const [currentPopup, setCurrentPopup] = useState(SwitchOptions.Login);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const switchPopupHandler = (option) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPopup(option);
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <Popup>
      <section
        key={currentPopup}
        className={`${styles["content"]} ${
          isTransitioning ? styles["slide-out"] : styles["slide-in"]
        }`}
      >
        {currentPopup === SwitchOptions.Login ? (
          <Login
            switchPopupHandler={switchPopupHandler}
            switchOptions={SwitchOptions}
          />
        ) : (
          <Register
            switchPopupHandler={switchPopupHandler}
            switchOptions={SwitchOptions}
          />
        )}
      </section>
    </Popup>
  );
};
