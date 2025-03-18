import { memo } from "react";

import styles from "./Paragraph.module.css";

export const Paragraph = memo(({ text, textAlign, color, underline }) => {
  return (
    <p
      className={`${styles["paragraph"]} ${styles[textAlign]} ${
        styles[color]
      } ${underline ? styles[underline] : ""}`.trim()}
    >
      {text}
    </p>
  );
});
