import styles from "./UnderlinedButton.module.css";

export const UnderlinedButton = ({ title, callbackFunction }) => {
  return (
    <button
      className={styles["underlined-button"]}
      onClick={() => callbackFunction()}
    >
      {title}
    </button>
  );
};
