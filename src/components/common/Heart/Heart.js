import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-regular-svg-icons";

import styles from "./Heart.module.css";

export const Heart = () => {
  return <FontAwesomeIcon icon={faHeart} className={styles["heart-icon"]} />;
};
