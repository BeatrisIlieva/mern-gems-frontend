import styles from "./PriceRange.module.css";

export const PriceRange = ({ jewelriesByCategory }) => {
  return (
    <div className={styles["price-range"]}>
      {`$${jewelriesByCategory[0].inventories[0].price} - $${jewelriesByCategory[0].inventories[2].price}`}
    </div>
  );
};
