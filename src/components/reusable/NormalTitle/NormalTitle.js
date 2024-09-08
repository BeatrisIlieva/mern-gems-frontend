import { memo } from "react";

import styles from "./NormalTitle.module.css";

export const NormalTitle = memo(({ title, variant }) => {
  return (
    <h4
      className={
        variant ? `${styles["title"]} ${styles[variant]}` : styles["title"]
      }
    >
      {title}
    </h4>
  );
});
