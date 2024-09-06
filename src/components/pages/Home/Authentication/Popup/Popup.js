import styles from "./Popup.module.css";

export const Popup = ({ children, isTransitioning }) => {
  return (
    <section
      className={`${styles["overlay"]}  ${
        isTransitioning ? styles["transition-out"] : styles["transition-in"]
      }`}
    >
      <div
        className={`${styles["modal"]}  ${
          isTransitioning ? styles["slide-out"] : styles["slide-in"]
        }`}
      >
        {children}
      </div>
    </section>
  );
};
