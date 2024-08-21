import { useState, useEffect } from "react";

import { useService } from "./useService";

import { jewelryServiceFactory } from "../services/jewelryService";

export const useJewelry = ({ categoryTitle, colorTitle }) => {
  const [jewelriesByCategory, setJewelriesByCategory] = useState([]);

  const jewelryService = useService(jewelryServiceFactory);

  useEffect(() => {
    jewelryService
      .getOne(categoryTitle, colorTitle)
      .then((data) => {
        setJewelriesByCategory(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [categoryTitle, colorTitle, jewelryService]);

  return { jewelriesByCategory };
};
