import { InfoMessage } from "../../../reusable/InfoMessage/InfoMessage";
import { Content } from "./Content/Content";

import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useWishlistContext } from "../../../../contexts/WishlistContext";

import {
  TITLES_BY_LANGUAGE,
  SUBTITLES_BY_LANGUAGE,
} from "./constants/languageRelated";

import styles from "./NonEmptyWishlist.module.css";

export const NonEmptyWishlist = () => {
  const { language } = useLanguageContext();

  const { wishlistItems, wishlistTotalQuantity } = useWishlistContext();

  const title = `${TITLES_BY_LANGUAGE[language]} (${wishlistTotalQuantity})`;

  const subtitle = SUBTITLES_BY_LANGUAGE[language];

  return (
    <>
      {wishlistItems.length > 0 && (
        <section id={styles["non-empty-wishlist"]}>
          <InfoMessage title={title} subtitle={subtitle} />
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
