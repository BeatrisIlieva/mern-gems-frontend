import { useState } from "react";

import { Popup } from "../../Popup/Popup";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";

export const Authentication = () => {
  const isAuthenticated = false;
  const [displayPopup, setDisplayPopup] = useState(!isAuthenticated);

  const [displayLogin, setDisplayLogin] = useState(true);
  const [displayRegister, setDisplayRegister] = useState(false);

  const toggleDisplayPopup = () => {
    setDisplayPopup(!displayPopup);
  };

  return (
    <Popup isVisible={displayPopup} variant={"modal-authentication"}>
      {displayLogin ? <Login /> : <Register />}
      <button onClick={toggleDisplayPopup}>Close</button>
    </Popup>
  );
};
