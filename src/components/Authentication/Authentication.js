import { useState } from "react";

import { Popup } from "../Popup/Popup";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";

const SwitchOptions = {
  Login: "login",
  Register: "register",
};

export const Authentication = () => {
  const isAuthenticated = false;
  const [displayPopup, setDisplayPopup] = useState(!isAuthenticated);

  const [currentPopup, setCurrentPopup] = useState(SwitchOptions.Login);

  const switchPopupHandler = (option) => {
    setCurrentPopup(option);
  };

  return (
    <Popup isVisible={displayPopup} variant={"modal-authentication"}>
      {currentPopup === SwitchOptions.Login && (
        <Login
          switchPopupHandler={switchPopupHandler}
          switchOptions={SwitchOptions}
        />
      )}
      {currentPopup === SwitchOptions.Register && (
        <Register
          switchPopupHandler={switchPopupHandler}
          switchOptions={SwitchOptions}
        />
      )}
    </Popup>
  );
};
