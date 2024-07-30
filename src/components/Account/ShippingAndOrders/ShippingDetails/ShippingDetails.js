import { Popup } from "../../../Popup/Popup";
import { ShippingDetailsForm } from "./ShippingDetailsForm/ShippingDetailsForm";

export const ShippingDetails = ({ toggleDisplayShippingDetailsPopup }) => {
  return (
    <Popup
      isVisible
      variant={"shipping-details"}
      popupCloseHandler={toggleDisplayShippingDetailsPopup}
    >
      <ShippingDetailsForm
        toggleDisplayShippingDetailsPopup={toggleDisplayShippingDetailsPopup}
      />
    </Popup>
  );
};
