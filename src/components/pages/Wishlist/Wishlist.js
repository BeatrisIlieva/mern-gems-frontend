import { CategoryCard } from "../../common/Collection/CategoryCard/CategoryCard";

import { useWishlistContext } from "../../../contexts/WishlistContext";

import styles from "./Wishlist.module.css"

export const Wishlist = () => {
  const { wishlistItems } = useWishlistContext();

  const itemsArray = wishlistItems?.result;

    if (!Array.isArray(itemsArray)) {
      // If itemsArray is not an array (e.g., undefined or null), return an empty state or loading indicator
      return <div>Loading...</div>;
    }

  return (
    <section id={styles["wishlist"]}>
      <div className={styles["wrapper"]}>
        {itemsArray.map((item) => (
          <CategoryCard
            key={item._id}
            categoryTitle={item.category.title}
            colorTitle={item.color.title}
          />
        ))}
      </div>
    </section>
  );
};
