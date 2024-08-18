import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./CircleIcon.module.css";

export const CircleIcon = ({ isSelected, image, updateActiveLargeImage}) => {
  return (
    <FontAwesomeIcon
    onClick={() => updateActiveLargeImage(image)}
      icon={faCircle}
      className={`${styles["circle"]} ${
        isSelected === true ? styles["selected"] : ""
      }`.trim()}
    />
  );
};
