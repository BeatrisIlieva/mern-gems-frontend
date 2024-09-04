import { useState, useEffect, createContext, useContext } from "react";

import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import { useService } from "../hooks/useService";

import { wishlistServiceFactory } from "../services/wishlistService";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { userId } = useAuthenticationContext();

  const [wishlistItems, setWishlistItems] = useState([]);

  const [wishlistTotalQuantity, setWishlistTotalQuantity] = useState(0);

  const wishlistService = useService(wishlistServiceFactory);

  useEffect(() => {
    wishlistService
      .getAll(userId)
      .then((data) => {
        setWishlistItems(data);
        setWishlistTotalQuantity(data.length);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId, wishlistService]);

  const add = async (jewelryId, userId) => {
    await wishlistService.add(jewelryId, userId);
  };

  const remove = async (jewelryId, userId) => {
    await wishlistService.delete(jewelryId, userId);
  };

  const context = {
    wishlistItems,
    wishlistTotalQuantity,
    add,
    remove,
  };

  return (
    <WishlistContext.Provider value={context}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => {
  const context = useContext(WishlistContext);

  return context;
};
