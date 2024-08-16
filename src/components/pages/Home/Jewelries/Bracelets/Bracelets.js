import { useState, useEffect } from "react";

import { CategoryCard } from "../reusable/CategoryCard/CategoryCard";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";

import { useService } from "../../../../../hooks/useService";

import { jewelryServiceFactory } from "../../../../../services/jewelryService";

export const Bracelets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bracelets, setBracelets] = useState([]);

  const jewelryService = useService(jewelryServiceFactory);

  useEffect(() => {
    setIsLoading(true);

    jewelryService
      .getAll(1)
      .then((data) => {
        setBracelets(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading || bracelets.length < 1 ? (
        <CardSkeleton />
      ) : (
        <CategoryCard entity={bracelets} />
      )}
    </>
  );
};
