import { memo } from "react";

import { InfoMessage } from "../../../reusable/InfoMessage/InfoMessage";
import { CardSlider } from "../../../common/CardSlider/CardSlider";

import styles from "./EmptyBag.module.css";

export const EmptyBag = memo(() => {
  return (
    <section id={styles["empty-bag"]}>
      <InfoMessage
        title={"Your Shopping Bag Is Empty."}
        subtitle={"Explore and add something you love."}
      />
      <CardSlider />
    </section>
  );
});
