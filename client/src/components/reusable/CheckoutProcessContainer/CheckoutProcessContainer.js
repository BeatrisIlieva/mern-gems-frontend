import styles from "./CheckoutProcessContainer.module.css";

export const CheckoutProcessContainer = ({ children }) => {
  return (
    <section className={styles["shopping-process-container"]}>
      <div className={styles["children"]}>{children}</div>
    </section>
  );
};
