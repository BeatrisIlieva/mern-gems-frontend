import styles from "./PinkButton.module.css";

export const PinkButton = ({ variant, title }) => {
  return (
    <button className={styles["button"]}>
      {title}
    </button>
  );
};
