import { useState, useEffect } from "react";

import { useService } from "./useService";
import { bagServiceFactory } from "../services/bagService";

export const useBag = ({ userId }) => {
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
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userId, bagService]);

  return { bagItems, totalPrice, bagTotalQuantity };
};
