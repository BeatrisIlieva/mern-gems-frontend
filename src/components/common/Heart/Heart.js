

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

import styles from "./Heart.module.css";

export const Heart = () => {
  return (
    <>
      <FontAwesomeIcon icon={regularHeart} className={styles["heart-icon"]} />
      <FontAwesomeIcon icon={solidHeart} className={styles["heart-icon"]} />
    </>
  );
};
