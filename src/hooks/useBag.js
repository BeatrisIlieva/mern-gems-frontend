import { useState, useEffect } from "react";

import { useService } from "./useService";

import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import { bagServiceFactory } from "../services/bagService";

export const useBag = () => {
  const { userId } = useAuthenticationContext();
  const bagService = useService(bagServiceFactory);
  const [loading, setLoading] = useState(true);

  const [bagItems, setBagItems] = useState([]);

  useEffect(() => {
    setLoading(true);

    bagService
      .getAll(userId)
      .then((data) => {
        setBagItems(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //   useEffect(() => {
  //     setLoading(true);

  //     bagService
  //       .getAll(userId)
  //       .then((data) => {
  //         const bagData = data.jewelries;
  //         const bagItems = bagData[0].documents;
  //         setBagItems(bagItems);

  //         const totalPrice = bagData[0].totalTotalPrice;
  //         setTotalPrice(totalPrice);

  //         const totalQuantity = bagData[0].totalQuantity;
  //         setTotalQuantity(totalQuantity);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }, []);

  return {
    loading,
    bagItems,
  };
};
