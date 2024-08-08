import styles from "./Button.module.css";

export const Button = ({
  title,
  buttonIsDisabled,
  callBackFunction,
  variant,
}) => {
  return (
    <button
      className={
        !buttonIsDisabled ? `${styles["button"]} ${styles[variant]}` : `${styles["button"]} ${styles[variant]} ${styles["disabled"]}`
      }
      disabled={buttonIsDisabled}
      onClick={callBackFunction}
    >
      {title}
    </button>
  );
};
