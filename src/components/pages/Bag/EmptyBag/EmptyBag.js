import { InfoMessage } from "../../../reusable/InfoMessage/InfoMessage";

import styles from "./EmptyBag.module.css";

export const EmptyBag = () => {
  return (
    <section id={styles["empty-bag"]}>
      <InfoMessage
        title={"Your Shopping Bag Is Empty"}
        subtitle={"Explore and add something you love."}
      />
    </section>
  );
};
