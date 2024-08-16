import { useState, useEffect } from "react";

import { useService } from "../../../../../hooks/useService";

import { jewelryServiceFactory } from "../../../../../services/jewelryService";

import { CategoryCard } from "../reusable/CategoryCard/CategoryCard";

import { LoadingSpinner } from "../../../JewelryList/LoadingSpinner/LoadingSpinner";

import styles from "./Bracelets.module.css";

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
        <LoadingSpinner />
      ) : (
        <CategoryCard entity={bracelets}/>
      )}
    </>
  );
};
