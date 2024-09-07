import { memo } from "react";

import styles from "./Label.module.css";

const Label = ({ title }) => {
  return <h3 className={styles["label"]}>{title}</h3>;
};

export default memo(Label);
