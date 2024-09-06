import { InfoMessage } from "../../../../reusable/InfoMessage/InfoMessage";
import { CardSlider } from "../../../../common/CardSlider/CardSlider";

import styles from "./EmptyMiniBag.module.css";

export const EmptyMiniBag = ({ toggleDisplayMiniBagPopup }) => {
  return (
    <section id={styles["empty-mini-bag"]}>
      <InfoMessage
        title={"Your Shopping Bag Is Empty."}
        subtitle={"You can continue shopping by exploring the collection."}
      />
      <CardSlider toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup} />
    </section>
  );
};
