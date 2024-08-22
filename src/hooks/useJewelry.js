import { useState, useEffect } from "react";

import { useService } from "./useService";

import { useNavigate } from "react-router-dom";

import { jewelryServiceFactory } from "../services/jewelryService";

export const useJewelry = ({ categoryTitle, colorTitle }) => {

  const navigate = useNavigate()
  
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
        navigate("*")
      });
  }, [categoryTitle, colorTitle, jewelryService]);

  return { jewelriesByCategory };
};
