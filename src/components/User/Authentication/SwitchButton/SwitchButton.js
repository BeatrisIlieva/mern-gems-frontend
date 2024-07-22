import { Link } from "react-router-dom";

import styles from "./SwitchButton.module.css";

export const SwitchButton = ({ text, title }) => {
  return (
    <div className={styles["wrapper"]}>
      <span>{text}</span>
      <button className={styles["button"]}>{title}</button>
    </div>
  );
};
