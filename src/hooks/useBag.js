import { useState, useEffect } from "react";
import { useAuthenticationContext } from "../contexts/AuthenticationContext";
import { useService } from "./useService";
import { bagServiceFactory } from "../services/bagService";

export const useBag = () => {
  const {userId} = useAuthenticationContext();

  const [bagItems, setBagItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [bagTotalQuantity, setBagTotalQuantity] = useState(bagItems.length);

  const bagService = useService(bagServiceFactory);

  useEffect(() => {
    setTotalPrice(
      bagItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
    );
  }, [bagItems]);

  useEffect(() => {
    bagService
      .getAll(userId)
      .then((data) => {
        const modifiedData = data.map((item) => ({
          ...item,
          totalPrice: item.quantity * item.price,
        }));

        setBagItems(modifiedData);
        setBagTotalQuantity(modifiedData.length)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId, bagService, bagTotalQuantity]);

  return { bagItems, totalPrice, bagTotalQuantity };
};
