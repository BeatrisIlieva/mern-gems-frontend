import { useState, useEffect } from "react";

import { useService } from "./useService";

import { jewelryServiceFactory } from "../services/jewelryService";

export const useJewelry = ({ categoryTitle, colorTitle }) => {
  const [jewelriesByCategory, setJewelriesByCategory] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  // const jewelryService = useService(jewelryServiceFactory);

  const [jewelryService, setJewelryService] = useState(useService(jewelryServiceFactory))

  const [displayPage404, setDisplayPage404] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    jewelryService
      .getOne(categoryTitle, colorTitle)
      .then((data) => {
        setJewelriesByCategory(data);

        setDisplayPage404(false);
      })
      .catch((err) => {
        console.log(err.message);
        
        setDisplayPage404(true);
      })
      .finally(() => {
        setIsLoading(false)
      });
  }, [categoryTitle, colorTitle, jewelryService]);

  return { jewelriesByCategory, displayPage404, isLoading };
};
