import styles from "./AnimatedButton.module.css";
export const AnimatedButton = ({ title }) => {
  return <button className={styles["animated-button"]}>{title}</button>;
};
