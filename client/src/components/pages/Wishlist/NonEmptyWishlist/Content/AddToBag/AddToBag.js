import { useState, useEffect, useCallback } from "react";

import { useBagContext } from "../../../../../../contexts/BagContext";

import { useService } from "../../../../../../hooks/useService";

import { jewelryServiceFactory } from "../../../../../../services/jewelryService";

import { CATEGORIES_BY_ID } from "../../../../../../constants/categoriesById";
import { COLORS_BY_ID } from "../../../../../../constants/colorsById";

import { PopupItems } from "./PopupItems/PopupItems";

export const AddToBag = ({
  toggleDisplayPopup,
  displayPopup,
  categoryTitle,
  colorTitle,
  toggleDisplayMiniBagPopup,
}) => {
  const [isColorInitialized, setIsColorInitialized] = useState(false);

  const [selectedColor, setSelectedColor] = useState(colorTitle);

  const updateSelectedColor = useCallback(
    (color) => {
      setSelectedColor(color);
    },
    [setSelectedColor]
  );

  useEffect(() => {
    if (!isColorInitialized) {
      setSelectedColor(colorTitle);
      setIsColorInitialized(true);
    }
  }, [colorTitle, isColorInitialized]);

  const [jewelriesByCategory, setJewelriesByCategory] = useState([]);

  const { bagTotalQuantity } = useBagContext();

  const [jewelryService, setJewelryService] = useState(
    useService(jewelryServiceFactory)
  );

  const categoryId = CATEGORIES_BY_ID[categoryTitle];
  const colorId = COLORS_BY_ID[selectedColor];

  useEffect(() => {
    jewelryService
      .getOne(categoryId, colorId)
      .then((data) => {
        setJewelriesByCategory(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [categoryTitle, jewelryService, bagTotalQuantity, selectedColor]);

  return (
    <>
      {jewelriesByCategory.length > 0 && (
        <PopupItems
          toggleDisplayPopup={toggleDisplayPopup}
          displayPopup={displayPopup}
          jewelriesByCategory={jewelriesByCategory}
          popupCloseHandler={toggleDisplayPopup}
          updateSelectedColor={updateSelectedColor}
          toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup}
          categoryId={categoryId}
        />
      )}
    </>
  );
};
