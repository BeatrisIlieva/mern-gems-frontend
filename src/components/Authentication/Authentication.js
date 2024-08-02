import { useState } from "react";

import { Popup } from "../Popup/Popup";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";

const SwitchOptions = {
  Login: "login",
  Register: "register",
};

export const Authentication = () => {
  const [currentPopup, setCurrentPopup] = useState(SwitchOptions.Login);

  const switchPopupHandler = (option) => {
    setCurrentPopup(option);
  };

  return (
    <Popup overlayVariant={"overlay-top"} modalVariant={"authentication"}>
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
