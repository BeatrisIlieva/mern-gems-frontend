import {
  useState,
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
  const { userId, isAuthenticated } = useAuthenticationContext();

  const [wishlistItems, setWishlistItems] = useState([]);

  const wishlistService = useService(wishlistServiceFactory);

  const fetchWishlistItems = useCallback(async () => {
    try {
      const data = await wishlistService.getAll(userId);

      setWishlistItems(data.result);
    } catch (err) {
      console.log(err.message);
    }
  }, [wishlistService, userId]);

  const wishlistTotalQuantity = useMemo(() => {
    return isAuthenticated ? wishlistItems.length : 0;
  }, [wishlistItems.length, isAuthenticated]);

  const add = useCallback(
    async (categoryId, colorId, userId) => {
      await wishlistService.add(categoryId, colorId, userId);

      await fetchWishlistItems();
    },
    [wishlistService, fetchWishlistItems]
  );

  const remove = useCallback(
    async (categoryId, colorId, userId) => {
      await wishlistService.delete(categoryId, colorId, userId);

      await fetchWishlistItems();
    },
    [wishlistService, fetchWishlistItems]
  );

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
