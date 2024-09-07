import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
  useMemo,
} from "react";

import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import { useService } from "../hooks/useService";

import { wishlistServiceFactory } from "../services/wishlistService";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { userId } = useAuthenticationContext();

  const [wishlistItems, setWishlistItems] = useState([]);

  const wishlistService = useService(wishlistServiceFactory);

  useEffect(() => {
    wishlistService
      .getAll(userId)
      .then((data) => {
        setWishlistItems(data.result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId, wishlistService]);

  const wishlistTotalQuantity = useMemo(() => {
    return wishlistItems.length;
  }, [wishlistItems.length]);

  const add = useCallback(
    async (categoryId, colorId, userId) => {
      await wishlistService.add(categoryId, colorId, userId);
    },
    [wishlistService]
  );

  const remove = useCallback(
    async (categoryId, colorId, userId) => {
      await wishlistService.delete(categoryId, colorId, userId);
    },
    [wishlistService]
  );

  // const context = {
  //   wishlistItems,
  //   wishlistTotalQuantity,
  //   add,
  //   remove,
  // };

  const context = useMemo(
    () => ({ wishlistItems, wishlistTotalQuantity, add, remove }),
    [wishlistItems, wishlistTotalQuantity, add, remove]
  );

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
