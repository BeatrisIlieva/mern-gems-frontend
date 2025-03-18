import { Description } from "./Description/Description";

import styles from "./Collection.module.css";

export const Collection = () => {
  return (
    <article id={styles["collection"]}>
      <div className={styles["collection-overlay"]}></div>
      <Description />
      <img
        className={styles["desktop-image"]}
        src="https://res.cloudinary.com/deztgvefu/image/upload/v1716995569/collections/forgetmenot_rz0umv.png"
        alt=""
      />
      <img
        className={styles["mobile-image"]}
        src="https://res.cloudinary.com/deztgvefu/image/upload/v1726330964/forget-me-not-collection/miniImages/hero-mobile_k83pfc.jpg"
        alt=""
      />
    </article>
  );
};
