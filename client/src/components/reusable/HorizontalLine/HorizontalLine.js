import { memo } from "react";

import styles from "./HorizontalLine.module.css";

export const HorizontalLine = memo(({ variantHorizontalLine, variantHr }) => {
  return (
    <div
      data-testid="horizontal-line"
      className={
        variantHorizontalLine === "header"
          ? styles["horizontal-line-header"]
          : styles["horizontal-line"]
      }
    >
      <hr className={`${styles["hr-line"]} ${styles[variantHr]}`} />
      <img
        className={styles["line-img"]}
        src="https://res.cloudinary.com/deztgvefu/image/upload/v1724934188/forget-me-not-collection/miniImages/forget_me_not_earrings_diamond_and_pink_sapphire_eapsp1mflrfmn_ee-1_k5iyct_1_liyyq0_1_1_nyks5t.png"
        alt=""
      />
      <hr className={`${styles["hr-line"]} ${styles[variantHr]}`} />
    </div>
  );
});
