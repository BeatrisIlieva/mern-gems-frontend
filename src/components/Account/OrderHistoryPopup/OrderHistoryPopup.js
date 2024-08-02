import { Popup } from "../../Popup/Popup";
import { OrderHistory } from "./OrderHistory/OrderHistory";
import { PopupTitle } from "../PopupTitle/PopupTitle";

export const OrderHistoryPopup = ({ toggleDisplayOrderHistoryPopup }) => {
  return (
    <Popup
      overlayVariant={"overlay-top"}
      modalVariant={"address-book"}
      popupCloseHandler={toggleDisplayOrderHistoryPopup}
    >
      <PopupTitle title={"Order History"} />
      <OrderHistory />
    </Popup>
  );
};
