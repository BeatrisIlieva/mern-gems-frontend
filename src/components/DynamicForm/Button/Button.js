import styles from "./Button.module.css";

export const Button = ({ buttonTitle }) => {
  return (
    <button className={styles["button"]} type="submit">
      {buttonTitle}
    </button>
  );
};
