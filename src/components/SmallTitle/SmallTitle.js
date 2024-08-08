import styles from "./SmallTitle.module.css";

export const SmallTitle = ({ title }) => {
  return <h4 className={styles["title"]}>{title}</h4>;
};
