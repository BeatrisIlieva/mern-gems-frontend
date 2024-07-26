import { Popup } from "../../../Popup/Popup";

export const ShippingDetails = ({
  toggleDisplayShippingDetailsPopup,
}) => {
  return (
    <>
      <Popup
        isVisible
        variant={"order"}
        popupCloseHandler={toggleDisplayShippingDetailsPopup}
      ></Popup>
    </>
  );
};
