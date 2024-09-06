import { useState } from "react";

import { Popup } from "./Popup/Popup";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";
import { SwitchOptions } from "./switchOptions";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import styles from "./Authentication.module.css";

export const Authentication = () => {
  const { updateAuthentication } = useAuthenticationContext();

  const [currentPopup, setCurrentPopup] = useState(SwitchOptions.Login);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const updateIsTransitioningHandler = (option) => {
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentPopup(option);
      setIsTransitioning(false);
    }, 400);
  };

  const closeHandler = async (result) => {
    setIsTransitioning(true);

    setTimeout(async () => {
      setIsTransitioning(false);
      await updateAuthentication(result);
    }, 400);
  };

  return (
    <Popup isTransitioning={isTransitioning}>
      <div className={styles["image"]}>
        <img
          className={styles["img"]}
          src={
            "https://res.cloudinary.com/deztgvefu/image/upload/v1714938396/template_images/Screenshot_2024-05-05_at_22.42.20-removebg-preview_xfkrvq.png"
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
