import styles from "./LargeTitle.module.css";

export const LargeTitle = ({ title, textAlign }) => {
  return <h2 className={`${styles["title"]} ${styles[textAlign]}`}>{title}</h2>;
};
