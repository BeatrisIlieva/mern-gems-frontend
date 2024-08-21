import { useState, useEffect } from "react";
import { useService } from "./useService";
import { jewelryServiceFactory } from "../services/jewelryService";

export const useJewelry = ({ categoryId, colorId }) => {
  const [jewelriesByCategory, setJewelriesByCategory] = useState([]);

  const jewelryService = useService(jewelryServiceFactory);

  useEffect(() => {
    jewelryService
      .getOne(categoryId, colorId)
      .then((data) => {
        setJewelriesByCategory(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [categoryId, colorId, jewelryService]);

  return { jewelriesByCategory };
};
