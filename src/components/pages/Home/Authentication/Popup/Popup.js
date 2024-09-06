import styles from "./Popup.module.css";

export const Popup = ({ children, movePopup }) => {
  return (
    <section
      className={`${styles["overlay"]}  ${
        movePopup ? styles["transition-out"] : styles["transition-in"]
      }`}
    >
      <div
        className={`${styles["modal"]}  ${
          movePopup ? styles["slide-out"] : styles["slide-in"]
        }`}
      >
        {children}
      </div>
    </section>
  );
};
