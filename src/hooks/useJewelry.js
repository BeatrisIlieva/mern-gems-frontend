import { useState, useEffect } from "react";

import { useBagContext } from "../contexts/BagContext";

import { useService } from "./useService";

import { jewelryServiceFactory } from "../services/jewelryService";

export const useJewelry = ({ categoryTitle, colorTitle }) => {
  const [jewelriesByCategory, setJewelriesByCategory] = useState([]);

  const { bagTotalQuantity } = useBagContext();

  const [jewelryService, setJewelryService] = useState(
    useService(jewelryServiceFactory)
  );

  const [displayPage404, setDisplayPage404] = useState(false);

  useEffect(() => {
    jewelryService
      .getOne(categoryTitle, colorTitle)
      .then((data) => {
        setJewelriesByCategory(data);

        setDisplayPage404(false);
      })
      .catch((err) => {
        console.log(err.message);

        setDisplayPage404(true);
      });
  }, [categoryTitle, colorTitle, jewelryService, bagTotalQuantity]);

  return { jewelriesByCategory, displayPage404 };
};
