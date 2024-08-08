import styles from "./NormalTitle.module.css";

export const NormalTitle = ({ title, variant }) => {
  return (
    <h3
      className={
        variant ? `${styles["title"]} ${styles[variant]}` : styles["title"]
      }
    >
      {title}
    </h3>
  );
};
