import { useState } from "react";
import { Popup } from "../../Popup/Popup";
export const Authentication = () => {
  const isAuthenticated = true;
  const [isPopupVisible, setIsPopupVisible] = useState(!isAuthenticated);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <Popup isVisible={isPopupVisible} variant={"modal-authentication"}>
      <h1>This is the Popup Content</h1>
      <p>Here you can render any component or content dynamically.</p>
      <button onClick={togglePopup}>Close</button>
    </Popup>
  );
};
