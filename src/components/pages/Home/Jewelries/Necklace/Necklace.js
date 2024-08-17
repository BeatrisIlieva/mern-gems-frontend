import { Necklaces } from "./Necklaces/Necklaces";

import styles from "./Necklace.module.css";

export const Necklace = () => {
  return (
    <section id={styles["necklace"]}>
      <Necklaces />
      <div className={styles["thumbnail"]}>
        <img
          className={styles["image"]}
          src="https://res.cloudinary.com/deztgvefu/image/upload/v1723714886/forget-me-not-collection/herolarged_pdp_forgetmenot_klupzq.avif"
          alt="Forget-Me-Not-Collection"
        />
      </div>
    </section>
  );
};
