import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useService } from "./useService";

import { jewelryServiceFactory } from "../services/jewelryService";

export const useJewelry = ({ categoryTitle, colorTitle }) => {
  const navigate = useNavigate();

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
        navigate("*");
      })
      .finally(() => {});
  }, [categoryTitle, colorTitle, jewelryService, navigate]);

  return { jewelriesByCategory };
};
