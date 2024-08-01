import styles from "./XLargeTitle.module.css";

export const XLargeTitle = ({ title }) => {
  return <h1 className={styles["xlarge-title"]}>{title}</h1>;
};
