import { useState, useEffect } from "react";

import { useBagContext } from "../contexts/BagContext";

import { useService } from "./useService";

import { jewelryServiceFactory } from "../services/jewelryService";

import { CATEGORIES_BY_ID } from "../constants/categoriesById";
import { COLORS_BY_ID } from "../constants/colorsById";

export const useJewelry = ({ categoryTitle, colorTitle }) => {
  const [jewelriesByCategory, setJewelriesByCategory] = useState([]);

  const { bagTotalQuantity } = useBagContext();

  const [jewelryService, setJewelryService] = useState(
    useService(jewelryServiceFactory)
  );

  const [displayPage404, setDisplayPage404] = useState(false);

  const categoryId = CATEGORIES_BY_ID[categoryTitle];
  const colorId = COLORS_BY_ID[colorTitle];

  console.log(jewelriesByCategory, "here")

  useEffect(() => {
    jewelryService
      .getOne(categoryId, colorId)
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
