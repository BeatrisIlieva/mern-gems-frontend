import { InfoMessage } from "../../InfoMessage/InfoMessage";
import { Collection } from "../../Collection/Collection";

import styles from "./EmptyMiniBag.module.css";

export const EmptyMiniBag = () => {
  return (
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
  );
};
