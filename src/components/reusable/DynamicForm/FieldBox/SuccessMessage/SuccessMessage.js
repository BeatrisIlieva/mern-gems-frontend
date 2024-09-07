import { memo } from "react";

import styles from "./SuccessMessage.module.css";

const SuccessMessage = ({ values, value }) => {
  return (
    <>
      {values[value].successMessage && (
        <div
          className={styles["success-message"]}
          data-testid={`${value}-success`}
        >
          {values[value].successMessage}
        </div>
      )}
    </>
  );
};

export default memo(SuccessMessage);
