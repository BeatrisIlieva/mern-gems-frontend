import styles from "./UnderlinedButton.module.css";

export const UnderlinedButton = ({ title, callBackFunction }) => {
  return (
    <button
      className={styles["underlined-button"]}
      onClick={() => callBackFunction()}
    >
      {title}
    </button>
  );
};
