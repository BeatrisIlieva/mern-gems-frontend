import { InfoMessage } from "../../../../reusable/InfoMessage/InfoMessage";
import { CardSlider } from "../../../../common/CardSlider/CardSlider";
import styles from "./EmptyOrderHistory.module.css";

export const EmptyOrderHistory = () => {
  return (
    <section id={styles["empty-order-history"]}>
      <InfoMessage
        title={"You have no orders."}
        subtitle={"You can continue shopping by exploring the collection."}
      />
      <CardSlider />
    </section>
  );
};
