import { useState, useEffect, memo, useCallback } from "react";

import { DualTitleSection } from "../../../../reusable/DualTitleSection/DualTitleSection";
import { PriceRange } from "../../../../common/PriceRange/PriceRange";
import { StockStatus } from "../../../../common/StockStatus/StockStatus";
import { LargeImages } from "../../../../common/LargeImages/LargeImages";
import { Popup } from "../Popup/Popup";
import { Button } from "../../../../reusable/Button/Button";

import { useBagContext } from "../../../../../contexts/BagContext";

import { useService } from "../../../../../hooks/useService";
import { useLargeImagesClick } from "../../../../../hooks/useLargeImagesClick";

import { jewelryServiceFactory } from "../../../../../services/jewelryService";

import { checkIfItemsHasBeenSoldOut } from "../../../../common/StockStatus/helpers/checkIfItemsHasBeenSoldOut";

import { CATEGORIES_BY_ID } from "../../../../../constants/categoriesById";
import { COLORS_BY_ID } from "../../../../../constants/colorsById";

import styles from "./Content.module.css";

export const Content = memo(({ categoryTitle, colorTitle }) => {
  const [articleIsHovered, setArticleIsHovered] = useState(false);

  const [isSoldOut, setIsSoldOut] = useState(false);

  const [jewelriesByCategory, setJewelriesByCategory] = useState([]);

  const { bagTotalQuantity } = useBagContext();

  const [jewelryService, setJewelryService] = useState(
    useService(jewelryServiceFactory)
  );

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

  const { largeImagesClickHandler } = useLargeImagesClick({
    categoryTitle,
    colorTitle,
  });

  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = useCallback(() => {
    setDisplayPopup((displayPopup) => !displayPopup);
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
            />
          )}
          <article
            onMouseEnter={() => setArticleIsHovered(true)}
            onMouseLeave={() => setArticleIsHovered(false)}
            onTouchStart={() => setArticleIsHovered(true)}
            onTouchEnd={() => setArticleIsHovered(false)}
            className={
              articleIsHovered
                ? `${styles["content"]} ${styles["hovered"]}`
                : styles["content"]
            }
          >
            <LargeImages
              jewelriesByCategory={jewelriesByCategory}
              clickHandler={largeImagesClickHandler}
            />
            <DualTitleSection
              firstTitle={
                <PriceRange jewelriesByCategory={jewelriesByCategory} />
              }
              secondTitle={
                <StockStatus jewelriesByCategory={jewelriesByCategory} />
              }
              variant={"regular"}
            />
            <div className={styles["button"]}>
              <Button
                title={"Move to Bag"}
                buttonIsDisabled={isSoldOut}
                callBackFunction={toggleDisplayPopup}
                variant={"gray"}
              />
            </div>
          </article>
        </>
      )}
    </>
  );
});
