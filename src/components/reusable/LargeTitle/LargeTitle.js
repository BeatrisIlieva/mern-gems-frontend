import styles from "./LargeTitle.module.css";

export const LargeTitle = ({ title, textAlight}) => {
  return <h1 className={`${styles["title"]} ${styles[textAlight]}`}>{title}</h1>;
};
