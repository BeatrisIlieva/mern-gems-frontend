import styles from "./AnimatedButton.module.css";
export const AnimatedButton = ({ title, variant }) => {
  return <button className={styles["animated-button"]}>{title}</button>;
};
