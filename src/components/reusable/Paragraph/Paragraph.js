import styles from "./Paragraph.module.css";

export const Paragraph = ({ text, textAlign }) => {
  return (
    <p className={`${styles["paragraph"]} ${styles[textAlign]}`}>{text}</p>
  );
};
