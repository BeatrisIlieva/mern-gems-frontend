import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import * as jewelryByCategoryService from "../../services/jewelryByCategoryService";

import { JewelryByCategoryListItems } from "./JewelryByCategoryListItem/JewelryByCategoryListItem";

import { CATEGORIES_BY_ID } from "../../mappers/categoriesById";

export const JewelryByCategoryList = () => {
  const location = useLocation();
  const pathname = location.pathname.substring(1);

  const categoryId = CATEGORIES_BY_ID[pathname];

  const [jewelries, setJewelries] = useState([]);

  useEffect(() => {
    jewelryByCategoryService
      .getAll(categoryId)
      .then((jewelries) => {
        setJewelries(jewelries);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [pathname, categoryId]);

  return (
    <div>
      {jewelries.map((j) => (
        <JewelryByCategoryListItems key={j._id} {...j} />
      ))}
    </div>
  );
};
