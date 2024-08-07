import styles from "./Button.module.css";

export const Button = ({ title, callBackFunction }) => {
  return (
    <button className={styles["button"]} onClick={() => callBackFunction()}>
      {title}
    </button>
  );
};
