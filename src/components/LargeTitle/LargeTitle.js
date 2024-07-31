import styles from "./LargeTitle.module.css";

export const LargeTitle = ({ title }) => {
  return <h2 className={styles["large-title"]}>{title}</h2>;
};
