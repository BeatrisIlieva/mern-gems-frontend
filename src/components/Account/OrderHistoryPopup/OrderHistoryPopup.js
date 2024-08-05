import { Popup } from "../../Popup/Popup";
import { OrderHistory } from "./OrderHistory/OrderHistory";
import { ContainerTitle } from "../../ContainerTitle/ContainerTitle";

export const OrderHistoryPopup = ({ toggleDisplayOrderHistoryPopup }) => {
  return (
    <Popup
      overlayVariant={"overlay-top"}
      modalVariant={"order-history"}
      popupCloseHandler={toggleDisplayOrderHistoryPopup}
    >
      <ContainerTitle title={"Order History"} />
      <OrderHistory />
    </Popup>
  );
};
