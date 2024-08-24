import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CategoryCard } from "./CategoryCard/CategoryCard";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

import { useService } from "../../../../hooks/useService";

import { jewelryServiceFactory } from "../../../../services/jewelryService";

import { useJewelry } from "../../../../hooks/useJewelry";

export const Category = ({ categoryTitle, colorTitle }) => {
  const navigate = useNavigate();

  // const [selectedColorTitle, setSelectedColorTitle] = useState(colorTitle);

  // const updateColorTitle = (title) => {
  //   navigate(`/collection/${colorTitle}`)
  //   setSelectedColorTitle(title);

  // };

  // const [jewelriesByCategory, setJewelriesByCategory] = useState([]);

  // const jewelryService = useService(jewelryServiceFactory);

  const { jewelriesByCategory } = useJewelry({
    categoryTitle,
    colorTitle,
  });

  // useEffect(() => {
  //   jewelryService
  //     .getOne(categoryTitle, colorTitle)
  //     .then((data) => {
  //       setJewelriesByCategory(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     })
  //     .finally(() => {});
  // }, [categoryTitle, colorTitle, jewelryService]);

  return (
    <>
      {jewelriesByCategory.length < 1 ? (
        <CardSkeleton />
      ) : (
        <CategoryCard
          jewelriesByCategory={jewelriesByCategory}
          // updateColorTitle={updateColorTitle}
        />
      )}
    </>
  );
};
