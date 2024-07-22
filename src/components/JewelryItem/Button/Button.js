export const Button = ({ isSoldOut, price }) => {
  return (
    <button
      className={`${styles["add-to-bag-button"]} ${
        isSoldOut === true ? styles["button-disabled"] : ""
      }`.trim()}
      disabled={isSoldOut}
    >
      <span className={styles["price-span"]}>${price}</span>
      <span className={styles["add-span"]}>Add to Bag</span>
    </button>
  );
};
