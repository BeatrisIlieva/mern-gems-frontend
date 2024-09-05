import { useState } from "react";

import { useJewelry } from "../../../hooks/useJewelry";

import { INITIAL_CATEGORY_CARD_VALUES } from "../../pages/CollectionList/constants/initialCategoryCardValues";

export const CardSlider = () => {
  const [colorTitle, setColorTitle] = useState("");

  const [categoryTitle, setCategoryTitle] = useState("");

  const { jewelriesByCategory, displayPage404 } = useJewelry({
    categoryTitle,
    colorTitle,
  });
};
