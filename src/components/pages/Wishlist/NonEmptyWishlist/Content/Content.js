import { useState, useEffect, memo, useCallback } from "react";

import { Popup } from "./Popup/Popup";

import { MiniBag } from "../../../../common/MiniBag/MiniBag";
import { JewelryCard } from "./JewelryCard/JewelryCard";

import { useBagContext } from "../../../../../contexts/BagContext";

import { useService } from "../../../../../hooks/useService";

import { jewelryServiceFactory } from "../../../../../services/jewelryService";

import { checkIfItemsHasBeenSoldOut } from "../../../../common/StockStatus/helpers/checkIfItemsHasBeenSoldOut";

import { CATEGORIES_BY_ID } from "../../../../../constants/categoriesById";
import { COLORS_BY_ID } from "../../../../../constants/colorsById";

export const Content = memo(({ categoryTitle, colorTitle }) => {
  const [jewelriesByCategory, setJewelriesByCategory] = useState([]);

  const [isSoldOut, setIsSoldOut] = useState(false);

  const [jewelryService, setJewelryService] = useState(
    useService(jewelryServiceFactory)
  );

  const { bagTotalQuantity } = useBagContext();

  const categoryId = CATEGORIES_BY_ID[categoryTitle];
  const colorId = COLORS_BY_ID[colorTitle];

  useEffect(() => {
    jewelryService
      .getOne(categoryId, colorId)
      .then((data) => {
        setJewelriesByCategory(data);

        setIsSoldOut(checkIfItemsHasBeenSoldOut(data[0]));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [categoryTitle, colorTitle, jewelryService, bagTotalQuantity]);

  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = useCallback(() => {
    setDisplayPopup((displayPopup) => !displayPopup);
  }, []);

  const [displayMiniBagPopup, setDisplayMiniBagPopup] = useState(false);

  const toggleDisplayMiniBagPopup = useCallback(() => {
    setDisplayMiniBagPopup((displayMiniBagPopup) => !displayMiniBagPopup);
  }, []);

  return (
    <>
      {jewelriesByCategory.length > 0 && (
        <>
          {displayPopup && (
            <Popup
              toggleDisplayPopup={toggleDisplayPopup}
              displayPopup={displayPopup}
              jewelriesByCategory={jewelriesByCategory}
              categoryTitle={categoryTitle}
              colorTitle={colorTitle}
              toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup}
            />
          )}
          {displayMiniBagPopup && (
            <MiniBag
              toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup}
              displayPopup={displayMiniBagPopup}
            />
          )}
          <JewelryCard
            jewelriesByCategory={jewelriesByCategory}
            toggleDisplayPopup={toggleDisplayPopup}
            isSoldOut={isSoldOut}
            categoryTitle={categoryTitle}
colorTitle={colorTitle}
          />
        </>
      )}
    </>
  );
});
