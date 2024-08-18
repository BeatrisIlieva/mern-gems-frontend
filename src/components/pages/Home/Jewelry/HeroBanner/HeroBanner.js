import { CollectionDescription } from "./CollectionDescription/CollectionDescription";

import styles from "./HeroBanner.module.css";

export const HeroBanner = () => {
  return (
    <article id={styles["hero-banner"]}>
      <CollectionDescription />
      <div className={styles["thumbnail"]}>
        <img
          className={styles["image"]}
          src="https://res.cloudinary.com/deztgvefu/image/upload/v1716995569/collections/forgetmenot_rz0umv.png"
          alt=""
        />
      </div>
    </article>
  );
};
