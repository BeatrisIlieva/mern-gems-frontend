import { memo } from "react";

import styles from "./Text.module.css";

export const Text = memo(({ text }) => {
  return <div className={styles["text"]}>{text}</div>;
});
