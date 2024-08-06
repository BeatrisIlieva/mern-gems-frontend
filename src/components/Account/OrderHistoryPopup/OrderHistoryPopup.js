import { Popup } from "../../Popup/Popup";
import { OrderHistory } from "./OrderHistory/OrderHistory";
import { ContainerTitle } from "../../ContainerTitle/ContainerTitle";

export const OrderHistoryPopup = ({
  displayOrderHistoryPopup,
  popupCloseHandler,
}) => {
  return (
    <>
      {displayOrderHistoryPopup && (
        <Popup
          overlayVariant={"overlay-top"}
          modalVariant={"order-history"}
          popupCloseHandler={popupCloseHandler}
        >
          <ContainerTitle title={"Order History"} />
          <OrderHistory />
        </Popup>
      )}
    </>
  );
};
