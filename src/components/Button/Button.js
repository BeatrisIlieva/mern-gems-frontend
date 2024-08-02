import styles from "./Button.module.css";

export const Button = ({
  title,
  buttonIsDisabled,
  callBackFunction,
  variant,
  variantDisabled,
}) => {
  return (
    <button
      className={
        !buttonIsDisabled ? `${styles[variant]}` : `${styles[variantDisabled]}`
      }
      disabled={buttonIsDisabled}
      onClick={callBackFunction}
    >
      {title}
    </button>
  );
};
