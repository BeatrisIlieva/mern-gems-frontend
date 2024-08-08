import React, { useState } from "react";
import { Popup } from "./Popup/Popup";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";
import styles from "./Authentication.module.css";

const SwitchOptions = {
  Login: "login",
  Register: "register",
};

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
    <Popup
      title={
        currentPopup === SwitchOptions.Login
          ? "Sign In to Shop"
          : "Become a Member"
      }
    >
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
