import styles from "./SuccessMessage.module.css";

export const SuccessMessage = ({ values, value }) => {
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
