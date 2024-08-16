import { useState, useEffect } from "react";

import { CategoryCard } from "../reusable/CategoryCard/CategoryCard";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

import { useService } from "../../../../../hooks/useService";

import { jewelryServiceFactory } from "../../../../../services/jewelryService";

import { CATEGORIES_BY_ID } from "../../../../../mappers/categoriesById";

export const Rings = () => {
  const [rings, setRings] = useState([]);

  const jewelryService = useService(jewelryServiceFactory);

  useEffect(() => {
    jewelryService
      .getAll(CATEGORIES_BY_ID.rings)
      .then((data) => {
        setRings(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {rings.length < 1 ? (
        <CardSkeleton />
      ) : (
        <CategoryCard entity={rings} />
      )}
    </>
  );
};
