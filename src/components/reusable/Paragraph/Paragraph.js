import styles from "./Paragraph.module.css";

export const Paragraph = ({ text, textAlign, color }) => {
  return (
    <p className={`${styles["paragraph"]} ${styles[textAlign]} ${styles[color]}`}>{text}</p>
  );
};
