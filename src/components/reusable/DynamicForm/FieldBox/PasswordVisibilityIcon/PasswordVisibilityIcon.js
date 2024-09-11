import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import styles from "./PasswordVisibilityIcon.module.css";

export const PasswordVisibilityIcon = ({
  displayPassword,
  toggleDisplayPassword,
}) => {
  return (
    <>
      {displayPassword ? (
        <FontAwesomeIcon
          icon={faEyeSlash}
          className={styles["icon"]}
          onClick={toggleDisplayPassword}
        />
      ) : (
        <FontAwesomeIcon
          icon={faEye}
          className={styles["icon"]}
          onClick={toggleDisplayPassword}
        />
      )}
    </>
  );
};
