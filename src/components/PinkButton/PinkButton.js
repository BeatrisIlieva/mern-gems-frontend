import styles from "./PinkButton.module.css";

export const PinkButton = ({ color, title, callBackFunction }) => {
  return (
    <button className={styles["button"]} onClick={() => callBackFunction()}>
      {title}
    </button>
  );
};
