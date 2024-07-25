import styles from "./PinkButton.module.css";

export const PinkButton = ({ title, buttonIsDisabled }) => {
  return (
    <button
      className={
        !buttonIsDisabled
          ? `${styles["button"]}`
          : `${styles["button-disabled"]}`
      }
      disabled={buttonIsDisabled}
    >
      {title}
    </button>
  );
};
