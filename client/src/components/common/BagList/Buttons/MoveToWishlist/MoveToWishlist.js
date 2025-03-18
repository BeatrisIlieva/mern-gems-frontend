import { Button } from "../../../../reusable/Button/Button";

import { useAuthenticationContext } from "../../../../../contexts/AuthenticationContext";
import { useBagContext } from "../../../../../contexts/BagContext";
import { useWishlistContext } from "../../../../../contexts/WishlistContext";
import { useLanguageContext } from "../../../../../contexts/LanguageContext";

import {
  MOVE_TO_WISHLIST_BUTTON_TITLE,
  ALREADY_IN_WISHLIST_TITLE,
} from "./constants/languageRelated";

export const MoveToWishlist = ({ bagId, categoryId, colorId }) => {
  const { language } = useLanguageContext();

  const { userId } = useAuthenticationContext();

  const { remove: removeFromBag } = useBagContext();

  const { wishlistItems, add: addToWishlist } = useWishlistContext();

  const isLikedByUser = wishlistItems.some(
    (item) => item.category._id === categoryId && item.color._id === colorId
  );

  const handleClick = () => {
    addToWishlist(categoryId, colorId, userId);

    removeFromBag(bagId);
  };

  const buttonTitle = isLikedByUser
    ? ALREADY_IN_WISHLIST_TITLE[language]
    : MOVE_TO_WISHLIST_BUTTON_TITLE[language];

  const buttonVariant = isLikedByUser ? "info" : "underlined";

  return (
    <Button
      title={buttonTitle}
      callBackFunction={handleClick}
      variant={buttonVariant}
    />
  );
};
