import { EmptyWishlist } from "./EmptyWishList/EmptyWishList"; 
import { NonEmptyWishlist } from "./NonEmptyWishList/NonEmptyWishList"; 

import { useWishlistContext } from "../../../contexts/WishlistContext";

export const Wishlist = () => {
  const { wishlistTotalQuantity } = useWishlistContext();

  return (
    <>{wishlistTotalQuantity < 1 ? <EmptyWishlist /> : <NonEmptyWishlist />}</>
  );
};
