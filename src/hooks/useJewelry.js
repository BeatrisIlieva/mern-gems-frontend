import { useState, useEffect } from "react";

import { useService } from "./useService";

import { jewelryServiceFactory } from "../services/jewelryService";

export const useJewelry = ({ categoryTitle, colorTitle }) => {
  const [jewelriesByCategory, setJewelriesByCategory] = useState([]);

  const jewelryService = useService(jewelryServiceFactory);

  const [displayPage404, setDisplayPage404] = useState(false);

  useEffect(() => {
    jewelryService
      .getOne(categoryTitle, colorTitle)
      .then((data) => {
        setJewelriesByCategory(data);
      })
      .catch((err) => {
        console.log(err.message);
        setDisplayPage404(true);
      })
      .finally(() => {});
  }, [categoryTitle, colorTitle, jewelryService]);

  return { jewelriesByCategory, displayPage404 };
};
