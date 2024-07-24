import styles from "./LargeTitle.module.css";

export const LargeTitle = ({ title, variant }) => {
  return <h2 className={styles[variant]}>{title}</h2>;
};
