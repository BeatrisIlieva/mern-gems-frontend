import { Popup } from "../../Popup/Popup";
import { CardDetailsForm } from "./CardDetailsForm/CardDetailsForm";
import { PopupTitle } from "../PopupTitle/PopupTitle";

export const CardDetailsPopup = ({ toggleDisplayCardDetailsPopup }) => {
  return (
    <Popup
      overlayVariant={"overlay-top"}
      modalVariant={"account"}
      popupCloseHandler={toggleDisplayCardDetailsPopup}
    >
      <PopupTitle title={"Card Details"} />
      <CardDetailsForm
        toggleDisplayCardDetailsPopup={toggleDisplayCardDetailsPopup}
      />
    </Popup>
  );
};
