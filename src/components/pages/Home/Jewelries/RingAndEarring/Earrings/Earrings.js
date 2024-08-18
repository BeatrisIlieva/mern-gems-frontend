import { useState, useEffect } from "react";

import { CategoryCard } from "../../reusable/CategoryCard/CategoryCard";
import { CardSkeleton } from "../../CardSkeleton/CardSkeleton";

import { useService } from "../../../../../../hooks/useService";

import { jewelryServiceFactory } from "../../../../../../services/jewelryService";

import { CATEGORIES_BY_ID } from "../../../../../../mappers/categoriesById";

const initialColorIndex = 1;

export const Earrings = () => {
  const [earrings, setEarrings] = useState([]);

  const [colorIndex, setColorIndex] = useState(initialColorIndex);

  const jewelryService = useService(jewelryServiceFactory);

  const updateColorIndex = (index) => {
    setColorIndex(index);
  };

  useEffect(() => {
    jewelryService
      .getAll(CATEGORIES_BY_ID.earrings)
      .then((data) => {
        setEarrings(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {earrings.length < 1 ? (
        <CardSkeleton />
      ) : (
        <CategoryCard
          entity={earrings}
          entityIndex={colorIndex}
          updateColorIndex={updateColorIndex}
        />
      )}
    </>
  );
};
