import styles from "./SmallTitle.module.css";

export const SmallTitle = ({ title }) => {
  return <h4 className={styles["small-title"]}>{title}</h4>;
};
