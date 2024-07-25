import styles from "./SpanTitle.module.css";

export const SpanTitle = ({ title }) => {
  return <span className={styles["span-title"]}>{title}</span>;
};
