import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Arrow.module.css";

export const Arrow = ({ icon, callBackFunction }) => {
  return (
    <FontAwesomeIcon
      data-testid="arrow-icon"
      icon={icon}
      className={styles["icon"]}
      onClick={callBackFunction}
    />
  );
};
