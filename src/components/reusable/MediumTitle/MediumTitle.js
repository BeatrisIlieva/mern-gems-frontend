import styles from "./MediumTitle.module.css";

export const MediumTitle = ({ title }) => {
  return <h3 className={styles["title"]}>{title}</h3>;
};
