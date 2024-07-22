import { Link } from "react-router-dom";

import styles from "./SwitchButton.module.css";

export const SwitchButton = ({ text, title, switchPopupHandler, option }) => {
  return (
    <div className={styles["wrapper"]}>
      <span>{text}</span>
      <button
        onClick={() => switchPopupHandler(option)}
        className={styles["button"]}
      >
        {title}
      </button>
    </div>
  );
};
