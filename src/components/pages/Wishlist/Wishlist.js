import { CategoryCard } from "../../common/Collection/CategoryCard/CategoryCard";
import { InfoMessage } from "../../reusable/InfoMessage/InfoMessage";

import { useWishlistContext } from "../../../contexts/WishlistContext";

import styles from "./Wishlist.module.css";

export const Wishlist = () => {
  const { wishlistItems, wishlistTotalQuantity } = useWishlistContext();

  const itemsArray = wishlistItems?.result;

  const displayContent = Array.isArray(itemsArray);

  return (
    <>
      {displayContent && (
        <section id={styles["wishlist"]}>
          <InfoMessage
            title={`Your Wish List (${wishlistTotalQuantity})`}
            subtitle={
              "Your favorite item(s) are below. Wishes can come true, especially when you dream."
            }
          />
          <div className={styles["outer-wrapper"]}>
            <div className={styles["wrapper"]}>
              {itemsArray.map((item) => (
                <CategoryCard
                  key={item._id}
                  categoryTitle={item.category.title}
                  colorTitle={item.color.title}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
