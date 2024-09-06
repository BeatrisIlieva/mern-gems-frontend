import { Button } from "../../../../reusable/Button/Button";

import { useAuthenticationContext } from "../../../../../contexts/AuthenticationContext";
import { useBagContext } from "../../../../../contexts/BagContext";
import { useWishlistContext } from "../../../../../contexts/WishlistContext";

export const MoveToWishlist = ({ bagId, categoryId, colorId }) => {
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

  const buttonTitle = isLikedByUser ? "In Wishlist" : "Move to Wishlist";

  const buttonVariant = isLikedByUser ? "info" : "underlined";

  return (
    <Button
      title={buttonTitle}
      callBackFunction={handleClick}
      variant={buttonVariant}
    />
  );
};
