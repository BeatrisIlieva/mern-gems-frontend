import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Content.module.css";

export const Content = ({ icon, button }) => {
  return (
    <div className={styles["wrapper"]}>
      {button}
      <FontAwesomeIcon icon={icon} className={styles["icon"]} />
    </div>
  );
};
