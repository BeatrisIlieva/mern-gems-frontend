import { EmptyWishlist } from "./EmptyWishlist/EmptyWishlist"; 
import { NonEmptyWishlist } from "./NonEmptyWishlist/NonEmptyWishlist"; 

import { useWishlistContext } from "../../../contexts/WishlistContext";

export const Wishlist = () => {
  const { wishlistTotalQuantity } = useWishlistContext();

  return (
    <>{wishlistTotalQuantity < 1 ? <EmptyWishlist /> : <NonEmptyWishlist />}</>
  );
};
