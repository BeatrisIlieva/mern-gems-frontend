import styles from "./ShoppingProcessContainer.module.css";

export const ShoppingProcessContainer = ({ children }) => {
  return (
    <section className={styles["shopping-process-container"]}>
      <div className={styles["children"]}>{children}</div>
    </section>
  );
};
