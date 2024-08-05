import styles from "./ErrorMessage.module.css";

export const ErrorMessage = ({ values, value }) => {
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
