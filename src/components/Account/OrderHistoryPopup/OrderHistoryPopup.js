import { Popup } from "../../Popup/Popup";
import { OrderHistory } from "./OrderHistory/OrderHistory";
// import { PopupTitle } from "../PopupTitle/PopupTitle";

export const OrderHistoryPopup = ({ toggleDisplayOrderHistoryPopup }) => {
  return (
    <Popup
      overlayVariant={"overlay-top"}
      modalVariant={"order-history"}
      popupCloseHandler={toggleDisplayOrderHistoryPopup}
    >
      {/* <PopupTitle title={"Order History"} /> */}
      <OrderHistory />
    </Popup>
  );
};
