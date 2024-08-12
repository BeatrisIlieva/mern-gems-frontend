import styles from "./XLargeTitle.module.css";

export const XLargeTitle = ({ title, variant }) => {
  return <h1 className={`${styles["title"]} ${styles[variant]}`}>{title}</h1>;
};
