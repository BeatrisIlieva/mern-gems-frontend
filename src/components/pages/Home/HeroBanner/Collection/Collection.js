import { Description } from "./Description/Description";

import styles from "./Collection.module.css";

export const Collection = () => {
  return (
    <article id={styles["collection"]}>
      <div className={styles["collection-overlay"]}></div>
      <Description />
      <img
        className={styles["image"]}
        src="https://res.cloudinary.com/deztgvefu/image/upload/v1716995569/collections/forgetmenot_rz0umv.png"
        alt=""
      />
    </article>
  );
};
