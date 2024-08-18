import { useState, useEffect } from "react";

import { CategoryCard } from "../../reusable/CategoryCard/CategoryCard";
import { CardSkeleton } from "../../CardSkeleton/CardSkeleton";

import { useService } from "../../../../../../hooks/useService";

import { jewelryServiceFactory } from "../../../../../../services/jewelryService";

import { CATEGORIES_BY_ID } from "../../../../../../mappers/categoriesById";

import { COLORS_BY_INDEX } from "../../constants/colorsByIndex";

export const Bracelets = () => {
  const [bracelets, setBracelets] = useState([]);

  const jewelryService = useService(jewelryServiceFactory);

  useEffect(() => {
    jewelryService
      .getAll(CATEGORIES_BY_ID.bracelets)
      .then((data) => {
        setBracelets(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {bracelets.length < 1 ? (
        <CardSkeleton />
      ) : (
        <CategoryCard entity={bracelets} entityIndex={COLORS_BY_INDEX.pink} />
      )}
    </>
  );
};
