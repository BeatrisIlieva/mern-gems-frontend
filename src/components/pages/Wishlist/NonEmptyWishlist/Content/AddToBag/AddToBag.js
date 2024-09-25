import { useState, useEffect, useCallback } from "react";

import { Overlay } from "./Overlay/Overlay";

import { useBagContext } from "../../../../../../contexts/BagContext";

import { useService } from "../../../../../../hooks/useService";
import { usePopup } from "../../../../../../hooks/usePopup";

import { jewelryServiceFactory } from "../../../../../../services/jewelryService";

import { CATEGORIES_BY_ID } from "../../../../../../constants/categoriesById";
import { COLORS_BY_ID } from "../../../../../../constants/colorsById";

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

  const { isTransitioning, popupRef, popupCloseHandler } = usePopup({
    toggleDisplayPopup,
    displayPopup,
  });

  return (
    <>
      {jewelriesByCategory.length > 0 && (
        <Overlay
          toggleDisplayPopup={toggleDisplayPopup}
          displayPopup={displayPopup}
          jewelriesByCategory={jewelriesByCategory}
          popupCloseHandler={popupCloseHandler}
          updateSelectedColor={updateSelectedColor}
          toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup}
          isTransitioning={isTransitioning}
          popupRef={popupRef}
          categoryId={categoryId}
        />
      )}
    </>
  );
};
