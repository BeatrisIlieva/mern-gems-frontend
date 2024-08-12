import styles from "./Paragraph.module.css";

export const Paragraph = ({ text }) => {
  return <p className={styles["paragraph"]}>{text}</p>;
};
