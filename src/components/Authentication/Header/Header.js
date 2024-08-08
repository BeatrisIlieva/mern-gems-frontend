import styles from "./Header.module.css";

export const Header = ({ title }) => {
  return <h2 className={styles["title"]}>{title}</h2>;
};
