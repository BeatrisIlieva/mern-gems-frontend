import { useState, useEffect } from "react";

import { CategoryCard } from "../../reusable/CategoryCard/CategoryCard";
import { CardSkeleton } from "../../CardSkeleton/CardSkeleton";

import { useService } from "../../../../../../hooks/useService";

import { jewelryServiceFactory } from "../../../../../../services/jewelryService";

import { CATEGORIES_BY_ID } from "../../../../../../mappers/categoriesById";

import { COLORS_BY_INDEX } from "../../constants/colorsByIndex";

export const Earrings = () => {
  const [earrings, setEarrings] = useState([]);
  const [activeEntityIndex, setActiveEntityIndex] = useState(CATEGORIES_BY_ID.earrings)

  const jewelryService = useService(jewelryServiceFactory);

  const updateEntityIndex = (index) => {}

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
        <CategoryCard entity={earrings} entityIndex={COLORS_BY_INDEX.blue} />
      )}
    </>
  );
};
