import { memo } from "react";

import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ values, value }) => {
  return (
    <>
      {values[value].errorMessage && (
        <div className={styles["error-message"]} data-testid={`${value}-error`}>
          {values[value].errorMessage}
        </div>
      )}
    </>
  );
};

export default memo(ErrorMessage);
