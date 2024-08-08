import styles from "./LargeTitle.module.css";

export const LargeTitle = ({ title }) => {
  return <h1 className={styles["title"]}>{title}</h1>;
};
