import { InfoMessage } from "../../../reusable/InfoMessage/InfoMessage";
import { Content } from "./Content/Content";

import { useWishlistContext } from "../../../../contexts/WishlistContext";

import styles from "./NonEmptyWishlist.module.css";

export const NonEmptyWishlist = () => {
  const { wishlistItems, wishlistTotalQuantity } = useWishlistContext();

  const subtitle =
    wishlistTotalQuantity > 0
      ? "Your favorite item(s) are below. Wishes can come true, especially when you dream."
      : "This list is empty. Explore and add something you love.";

  return (
    <>
      {wishlistItems.length > 0 && (
        <section id={styles["non-empty-wishlist"]}>
          <InfoMessage
            title={`Your Wish List (${wishlistTotalQuantity})`}
            subtitle={subtitle}
          />
          {wishlistTotalQuantity > 0 && (
            <div className={styles["outer-wrapper"]}>
              {wishlistItems.map((item) => (
                <Content
                  key={item._id}
                  categoryTitle={item.category.title}
                  colorTitle={item.color.title}
                />
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
};
