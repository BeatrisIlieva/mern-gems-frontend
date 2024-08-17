import { Bracelets } from "./Bracelets/Bracelets";

import styles from "./Bracelet.module.css";

export const Bracelet = () => {
  return (
    <section id={styles["bracelet"]}>
      <article className={styles["bracelet-card"]}>
        <div className={styles["info"]}>
          <h1 className={styles["title"]}>Forget-Me-Not Collection</h1>
          <p className={styles["paragraph"]}>
            Nature, the House's enduring muse, continues to inspire ethereal
            fine jewelry designs destined to stand the test of time. The
            enchanting and delicate beauty of a Forget-Me-Not flower in bloom is
            captured in a series of fine jewelry designs that celebrate the
            endless beauty of nature’s greatest gifts – rare gemstones and
            flowers in bloom.
          </p>
        </div>
        <div className={styles["thumbnail"]}>
          <img
            className={styles["image"]}
            src="https://res.cloudinary.com/deztgvefu/image/upload/v1716995569/collections/forgetmenot_rz0umv.png"
            alt="Forget-Me-Not Collection"
          />
        </div>
      </article>
      <Bracelets />
    </section>
  );
};
