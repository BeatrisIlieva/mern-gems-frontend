import { InfoMessage } from "../../../reusable/InfoMessage/InfoMessage";
import { CardSlider } from "../../../common/CardSlider/CardSlider";

import styles from "./EmptyWishlist.module.css";

export const EmptyWishlist = () => {
  return (
    <section id={styles["empty-wishlist"]}>
      <InfoMessage
        title={"This Wishlist Is Empty."}
        subtitle={"Explore and add something you love."}
      />
      <CardSlider />
    </section>
  );
};