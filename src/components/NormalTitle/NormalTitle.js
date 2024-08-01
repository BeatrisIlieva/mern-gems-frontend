import styles from "./NormalTitle.module.css";

export const NormalTitle = ({ title, variant }) => {
  return <h3 className={styles[`normal-title-${variant}`]}>{title}</h3>;
};
