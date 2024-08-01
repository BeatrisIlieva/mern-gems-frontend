import styles from "./NormalTitle.module.css";

export const NormalTitle = ({ title }) => {
  return <h3 className={styles["normal-title"]}>{title}</h3>;
};