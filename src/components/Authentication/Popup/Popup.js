import styles from "./Popup.module.css";

export const Popup = ({ children }) => {
  return (
    <section className={styles["overlay"]}>
      <div className={styles["modal"]}>{children}</div>
    </section>
  );
};
