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
        setWishlistTotalQuantity(data.result.length);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId, wishlistService]);

  const add = async (categoryId, colorId, userId) => {
    await wishlistService.add(categoryId, colorId, userId);
  };

  const remove = async (categoryId, colorId, userId) => {
    await wishlistService.delete(categoryId, colorId, userId);
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
