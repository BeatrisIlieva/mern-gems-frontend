import styles from "./SmallTitle.module.css";

export const SmallTitle = ({ title }) => {
  return <h2 className={styles["large-title"]}>{title}</h2>;
};
