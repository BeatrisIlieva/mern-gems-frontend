import styles from "./Title.module.css";

export const Title = ({ title, variant }) => {
  return <h3 className={`${styles["title"]} ${styles[variant]}`}>{title}</h3>;
};
