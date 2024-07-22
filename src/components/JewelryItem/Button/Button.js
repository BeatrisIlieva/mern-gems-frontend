import styles from "./Button.module.css";

export const Button = ({ price }) => {
  return (
    <button className={styles["button"]}>
      <span className={styles["price-span"]}>${price}</span>
      <span className={styles["text-span"]}>Add to Bag</span>
    </button>
  );
};
