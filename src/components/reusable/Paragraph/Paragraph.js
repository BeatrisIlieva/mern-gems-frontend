import { memo } from "react";

import styles from "./Paragraph.module.css";

export const Paragraph = memo(({ text, textAlign, color }) => {
  return (
    <p
      className={`${styles["paragraph"]} ${styles[textAlign]} ${styles[color]}`}
    >
      {text}
    </p>
  );
});
