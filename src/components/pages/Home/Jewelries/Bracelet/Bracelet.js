import { Bracelets } from "./Bracelets/Bracelets";

import styles from "./Bracelet.module.css";

export const Bracelet = () => {
  return (
    <section id={styles["bracelet"]}>
      <div className={styles["thumbnail"]}>
        <img
          className={styles["image"]}
          src="https://res.cloudinary.com/deztgvefu/image/upload/v1716995569/collections/forgetmenot_rz0umv.png"
          alt="Forget-Me-Not Collection"
        />
      </div>
      <Bracelets />
    </section>
  );
};
