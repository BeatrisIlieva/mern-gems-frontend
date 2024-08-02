import { Popup } from "../../Popup/Popup";
import { ShippingDetailsForm } from "./ShippingDetailsForm/ShippingDetailsForm";
import { LargeTitle } from "../../LargeTitle/LargeTitle";
import styles from "./AddressBookPopup.module.css";

export const AddressBookPopup = ({ toggleDisplayAddressBookPopup }) => {
  <Popup
    overlayVariant={"overlay-top"}
    modalVariant={"authentication"}
    popupCloseHandler={toggleDisplayAddressBookPopup}
  >
    <section className={styles["address-book-popup"]}>
      <div className={styles["left-container-title"]}>
        <LargeTitle title={"Address Book"} variant={"large-title"} />
      </div>
      <ShippingDetailsForm />
    </section>
  </Popup>;
};
