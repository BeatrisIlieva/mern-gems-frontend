import { CategoryCard } from "../../common/Collection/CategoryCard/CategoryCard";

import { useWishlistContext } from "../../../contexts/WishlistContext";

import styles from "./Wishlist.module.css";

export const Wishlist = () => {
  const { wishlistItems } = useWishlistContext();

  const itemsArray = wishlistItems?.result;

  const displayContent = Array.isArray(itemsArray);

  return (
    <>
      {displayContent && (
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
      )}
    </>
  );
};
