import { Popup } from "../../../Popup/Popup";
import { PopupHeader } from "../../../Authentication/PopupHeader/PopupHeader";
import { ShippingDetailsForm } from "./ShippingDetailsForm/ShippingDetailsForm";

export const ShippingDetails = ({ toggleDisplayShippingDetailsPopup }) => {
  return (
    <Popup
      isVisible
      variant={"order"}
      popupCloseHandler={toggleDisplayShippingDetailsPopup}
    >
      <PopupHeader title={"Add A New Address Book"} />
      <ShippingDetailsForm />
    </Popup>
  );
};
