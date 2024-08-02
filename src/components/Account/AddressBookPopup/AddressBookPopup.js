import { Popup } from "../../Popup/Popup";
import { ShippingDetailsForm } from "./ShippingDetailsForm/ShippingDetailsForm";
import { LargeTitle } from "../../LargeTitle/LargeTitle";
import styles from "./AddressBookPopup.module.css";

export const AddressBookPopup = ({ toggleDisplayAddressBookPopup }) => {
  return (
    <Popup
      overlayVariant={"overlay-top"}
      modalVariant={"address-book"}
      popupCloseHandler={toggleDisplayAddressBookPopup}
    >
      <section className={styles["address-book-popup"]}>
        <div className={styles["title"]}>
          <LargeTitle title={"Address Book"} variant={"large-title"} />
        </div>
        <ShippingDetailsForm
          toggleDisplayShippingDetailsPopup={toggleDisplayAddressBookPopup}
        />
      </section>
    </Popup>
  );
};
