import { InfoMessage } from "../../reusable/InfoMessage/InfoMessage";
import { Content } from "./Content/Content";

import { useWishlistContext } from "../../../contexts/WishlistContext";

import styles from "./Wishlist.module.css";

export const Wishlist = () => {
  const { wishlistItems, wishlistTotalQuantity } = useWishlistContext();

  const itemsArray = wishlistItems?.result;

  const displayContent = Array.isArray(itemsArray);

  const subtitle =
    wishlistTotalQuantity > 0
      ? "Your favorite item(s) are below. Wishes can come true, especially when you dream."
      : "This list is empty. Explore and add something you love.";

  return (
    <>
      {displayContent && (
        <section id={styles["wishlist"]}>
          <div className={styles["top-container"]}>
            <InfoMessage
              title={`Your Wish List (${wishlistTotalQuantity})`}
              subtitle={subtitle}
            />
            <div className={styles["thumbnail"]}>
              <img
                src="https://res.cloudinary.com/deztgvefu/image/upload/v1725543807/forget-me-not-collection/miniImages/pngtree-sweet-pink-ribbon-png-image_13127280_cfwfwv.png"
                alt="ribbon"
                className={styles["ribbon"]}
              />
            </div>
          </div>
          {wishlistTotalQuantity > 0 && (
            <div className={styles["outer-wrapper"]}>
              {itemsArray.map((item) => (
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
