import { InfoMessage } from "../../../reusable/InfoMessage/InfoMessage";
import { Collection } from "../../../common/Collection/Collection";

import styles from "./EmptyBag.module.css";

export const EmptyBag = () => {
  return (
    <section id={styles["empty-bag"]}>
      <InfoMessage
        title={"Your Shopping Bag Is Empty"}
        subtitle={"Explore and add something you love."}
      />
      <Collection />
    </section>
  );
};
