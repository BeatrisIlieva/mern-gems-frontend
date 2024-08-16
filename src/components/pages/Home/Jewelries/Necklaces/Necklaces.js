import { useState, useEffect } from "react";

import { CategoryCard } from "../reusable/CategoryCard/CategoryCard";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

import { useService } from "../../../../../hooks/useService";

import { jewelryServiceFactory } from "../../../../../services/jewelryService";

import { CATEGORIES_BY_ID } from "../../../../../mappers/categoriesById";

export const Necklaces = () => {
  const [necklaces, setNecklaces] = useState([]);

  const jewelryService = useService(jewelryServiceFactory);

  useEffect(() => {
    jewelryService
      .getAll(CATEGORIES_BY_ID.necklaces)
      .then((data) => {
        setNecklaces(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {necklaces.length < 1 ? (
        <CardSkeleton />
      ) : (
        <CategoryCard entity={necklaces} />
      )}
    </>
  );
};
