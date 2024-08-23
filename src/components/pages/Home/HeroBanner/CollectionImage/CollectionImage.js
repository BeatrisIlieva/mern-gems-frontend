import { CollectionDescription } from "../CollectionDescription/CollectionDescription";

import styles from "./CollectionImage.module.css";

export const CollectionImage = () => {
  return (
    <div className={styles["thumbnail"]}>
      <div className={styles["overlay"]}></div>
      <CollectionDescription />
      <img
        className={styles["image"]}
        src="https://res.cloudinary.com/deztgvefu/image/upload/v1716995569/collections/forgetmenot_rz0umv.png"
        alt=""
      />
    </div>
  );
};
