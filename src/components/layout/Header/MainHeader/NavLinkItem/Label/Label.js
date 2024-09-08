import { memo } from "react";

import styles from "./Label.module.css";

export const Label = memo(({ title }) => {
  return <h3 className={styles["label"]}>{title}</h3>;
});
