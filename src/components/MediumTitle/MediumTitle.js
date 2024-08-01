import styles from "./MediumTitle.module.css";

export const MediumTitle = ({ title }) => {
  return <h2 className={styles["medium-title"]}>{title}</h2>;
};
