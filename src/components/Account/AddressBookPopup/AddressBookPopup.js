import { Popup } from "../../Popup/Popup";
import { ShippingDetailsForm } from "./ShippingDetailsForm/ShippingDetailsForm";
import { PopupTitle } from "../PopupTitle/PopupTitle";

export const AddressBookPopup = ({ toggleDisplayAddressBookPopup }) => {
  return (
    <Popup
      overlayVariant={"overlay-top"}
      modalVariant={"address-book"}
      popupCloseHandler={toggleDisplayAddressBookPopup}
    >
      <PopupTitle title={"Address Book"} />
      <ShippingDetailsForm
        toggleDisplayShippingDetailsPopup={toggleDisplayAddressBookPopup}
      />
    </Popup>
  );
};
