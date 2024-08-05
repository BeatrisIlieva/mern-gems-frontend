import { Popup } from "../../Popup/Popup";
import { CardDetailsForm } from "../../CardDetailsForm/CardDetailsForm";
import { PopupTitle } from "../PopupTitle/PopupTitle";

export const CardDetailsPopup = ({ toggleDisplayCardDetailsPopup }) => {
  return (
    <Popup
      overlayVariant={"overlay-top"}
      modalVariant={"credit-card"}
      popupCloseHandler={toggleDisplayCardDetailsPopup}
    >
      <PopupTitle title={"Add a New Credit Card"} />
      <CardDetailsForm
        toggleDisplayCardDetailsPopup={toggleDisplayCardDetailsPopup}
      />
    </Popup>
  );
};
