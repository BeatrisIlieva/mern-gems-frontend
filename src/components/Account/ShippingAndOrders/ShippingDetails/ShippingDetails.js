import { Popup } from "../../../Popup/Popup";
import { DynamicForm } from "../../../DynamicForm/DynamicForm";

export const ShippingDetails = ({ toggleDisplayShippingDetailsPopup }) => {
  return (
    <Popup
      isVisible
      variant={"order"}
      popupCloseHandler={toggleDisplayShippingDetailsPopup}
    ></Popup>
  );
};
