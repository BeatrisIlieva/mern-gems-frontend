import styles from "./PinkButton.module.css";

export const PinkButton = ({ color, title }) => {
  return (
    <button className={styles["button"]}>
      {title}
    </button>
  );
};
