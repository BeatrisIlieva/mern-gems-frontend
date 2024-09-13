import { useState } from "react";

import { Popup } from "./Popup/Popup";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";
import { SwitchOptions } from "./constants/switchOptions";
import { SwitchLanguage } from "../../../common/SwitchLanguage/SwitchLanguage";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import styles from "./Authentication.module.css";

export const Authentication = () => {
  const { updateAuthentication } = useAuthenticationContext();

  const [currentPopup, setCurrentPopup] = useState(SwitchOptions.Login);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const [movePopup, setMovePopup] = useState(false);

  const updateIsTransitioningHandler = (option) => {
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentPopup(option);
      setIsTransitioning(false);
    }, 400);
  };

  const closeHandler = async (result) => {
    setMovePopup(true);

    setTimeout(async () => {
      setMovePopup(false);
      await updateAuthentication(result);
    }, 400);
  };

  return (
    <Popup movePopup={movePopup}>
      <SwitchLanguage />
      <div className={styles["image"]}>
        <img
          className={styles["img"]}
          src={
            "https://res.cloudinary.com/deztgvefu/image/upload/v1726147711/forget-me-not-collection/miniImages/logo2_zfmuo1.png"
          }
          alt="logo"
        />
      </div>
      <section
        key={currentPopup}
        className={`${styles["content"]} ${
          isTransitioning ? styles["slide-out"] : styles["slide-in"]
        }`}
      >
        {currentPopup === SwitchOptions.Login ? (
          <Login
            updateIsTransitioningHandler={updateIsTransitioningHandler}
            switchOptions={SwitchOptions}
            closeHandler={closeHandler}
          />
        ) : (
          <Register
            updateIsTransitioningHandler={updateIsTransitioningHandler}
            switchOptions={SwitchOptions}
            closeHandler={closeHandler}
          />
        )}
      </section>
    </Popup>
  );
};
