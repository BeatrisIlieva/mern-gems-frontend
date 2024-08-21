import { useState, useEffect } from "react";

import { useService } from "./useService";
import { bagServiceFactory } from "../services/bagService";

export const useBag = ({ userId }) => {
  const [bagItems, setBagItems] = useState([]);

  const bagService = useService(bagServiceFactory);

  useEffect(() => {
    bagService
      .getAll(userId)
      .then((data) => {
        setBagItems(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [bagService]);


  return { bagItems };
};
