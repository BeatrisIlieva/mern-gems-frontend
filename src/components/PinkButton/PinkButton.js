import styles from "./PinkButton.module.css";

export const PinkButton = ({ title, buttonIsDisabled, callBackFunction }) => {
  return (
    <button
      className={
        !buttonIsDisabled
          ? `${styles["button"]}`
          : `${styles["button-disabled"]}`
      }
      disabled={buttonIsDisabled}
      onClick={callBackFunction}
    >
      {title}
    </button>
  );
};
