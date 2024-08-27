import styles from "./Title.module.css";

export const Title = ({ title, variant }) => {
  return <span className={`${styles["title"]} ${styles[variant]}`}>{title}</span>;
};
