import { InfoMessage } from "../../../../reusable/InfoMessage/InfoMessage";
import { Collection } from "../../../../common/Collection/Collection";
import { Popup } from "../../../../reusable/Popup/Popup";

import styles from "./EmptyMiniBag.module.css";

export const EmptyMiniBag = ({ toggleDisplayMiniBagPopup }) => {
  return (
    <Popup
      popupCloseHandler={toggleDisplayMiniBagPopup}
      modalVariant={"mini-bag"}
      overlayVariant={"mini-bag"}
    >
      <section className={styles["empty-mini-bag"]}>
        <div className={styles["header"]}>
          <InfoMessage
            title={"Your Shopping Bag is Empty."}
            subtitle={"Explore and add something you love."}
          />
        </div>
        <div className={styles["collection"]}>
          <Collection />
        </div>
      </section>
    </Popup>
  );
};
