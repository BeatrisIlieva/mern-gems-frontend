import { Popup } from "../../Popup/Popup";
import { LargeTitle } from "../../LargeTitle/LargeTitle";
import { OrderHistory } from "./OrderHistory/OrderHistory";
import styles from "./OrderHistoryPopup.module.css";


export const OrderHistoryPopup = ({ toggleDisplayOrderHistoryPopup }) => {
  return (
    <Popup
      overlayVariant={"overlay-top"}
      modalVariant={"address-book"}
      popupCloseHandler={toggleDisplayOrderHistoryPopup}
    >
      <section className={styles["order-history-popup"]}>
        <div className={styles["title"]}>
          <LargeTitle title={"Order History"} variant={"large-title"} />
        </div>
        <OrderHistory/>
        {/* <ShippingDetailsForm
          toggleDisplayShippingDetailsPopup={toggleDisplayOrderHistoryPopup}
        /> */}
      </section>
    </Popup>
  );
};
