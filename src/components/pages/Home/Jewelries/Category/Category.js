import { useState, useEffect } from "react";

import { CategoryCard } from "../reusable/CategoryCard/CategoryCard";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

import { useService } from "../../../../../hooks/useService";

import { jewelryServiceFactory } from "../../../../../services/jewelryService";

export const Category = ({ entityId, initialColorIndex }) => {
  const [entity, setEntity] = useState([]);

  const [colorIndex, setColorIndex] = useState(initialColorIndex);

  const jewelryService = useService(jewelryServiceFactory);

  const updateColorIndex = (index) => {
    setColorIndex(index);
  };

  useEffect(() => {
    jewelryService
      .getAll(entityId)
      .then((data) => {
        setEntity(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {entity.length < 1 ? (
        <CardSkeleton />
      ) : (
        <CategoryCard
          entity={entity}
          colorIndex={colorIndex}
          updateColorIndex={updateColorIndex}
        />
      )}
    </>
  );
};
