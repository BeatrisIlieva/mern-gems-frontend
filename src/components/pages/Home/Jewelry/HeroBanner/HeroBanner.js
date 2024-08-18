import { MiniImage } from "./MiniImage/MiniImage";

import styles from "./HeroBanner.module.css";

export const HeroBanner = () => {
  return (
    <article id={styles["hero-banner"]}>
      <div className={styles["text"]}>
        <div className={styles["mini-image-absolute-left"]}>
          <img
            className={styles["wave-effect"]}
            src="https://res.cloudinary.com/deztgvefu/image/upload/v1723968898/forget-me-not-collection/miniImages/forget_me_not_earrings_diamond_and_pink_sapphire_eapsp1mflrfmn_ee-1_k5iyct_1_liyyq0.png"
            alt="Forget-Me-Not-Collection"
          />
        </div>
        <div className={styles["mini-image-absolute-right"]}>
          <img
            className={styles["wave-effect"]}
            src="https://res.cloudinary.com/deztgvefu/image/upload/v1723968898/forget-me-not-collection/miniImages/forget_me_not_earrings_diamond_and_pink_sapphire_eapsp1mflrfmn_ee-1_k5iyct_1_liyyq0.png"
            alt="Forget-Me-Not-Collection"
          />
        </div>
        <h1 className={styles["title"]}>Forget-Me-Not Collection</h1>
        <div className={styles["mini-image"]}>
          <img
            className={styles["wave-effect"]}
            src="https://res.cloudinary.com/deztgvefu/image/upload/v1723968898/forget-me-not-collection/miniImages/forget_me_not_earrings_diamond_and_pink_sapphire_eapsp1mflrfmn_ee-1_k5iyct_1_liyyq0.png"
            alt="Forget-Me-Not-Collection"
          />
        </div>
        <p className={styles["paragraph"]}>
          The enchanting and delicate beauty of a Forget-Me-Not flower in bloom
          is captured in a series of fine jewelry designs that celebrate the
          endless beauty of nature’s greatest gifts – rare gemstones and flowers
          in bloom.
        </p>
      </div>
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
