import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Icon.module.css"

export const Icon = ({ icon }) => {
  return <FontAwesomeIcon icon={icon} className={styles["icon"]} />;
};
