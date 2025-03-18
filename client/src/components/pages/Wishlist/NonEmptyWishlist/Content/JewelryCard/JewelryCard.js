import { useState } from "react";

import { DualTitleSection } from "../../../../../reusable/DualTitleSection/DualTitleSection";
import { PriceRange } from "../../../../../common/PriceRange/PriceRange";
import { StockStatus } from "../../../../../common/StockStatus/StockStatus";
import { LargeImages } from "../../../../../common/LargeImages/LargeImages";
import { Button } from "../../../../../reusable/Button/Button";

import { useLanguageContext } from "../../../../../../contexts/LanguageContext";

import { useLargeImagesClick } from "../../../../../../hooks/useLargeImagesClick";

import { BUTTON_TITLE_BY_LANGUAGE } from "./constants/languageRelated";

import styles from "./JewelryCard.module.css";

export const JewelryCard = ({
  jewelriesByCategory,
  toggleDisplayPopup,
  isSoldOut,
  categoryTitle,
  colorTitle,
}) => {
  const { language } = useLanguageContext();

  const [articleIsHovered, setArticleIsHovered] = useState(false);

  const { largeImagesClickHandler } = useLargeImagesClick({
    categoryTitle,
    colorTitle,
  });

  const buttonTitle = BUTTON_TITLE_BY_LANGUAGE[language];

  return (
    <article
      onMouseEnter={() => setArticleIsHovered(true)}
      onMouseLeave={() => setArticleIsHovered(false)}
      onTouchStart={() => setArticleIsHovered(true)}
      onTouchEnd={() => setArticleIsHovered(false)}
      className={
        articleIsHovered
          ? `${styles["jewelry-card"]} ${styles["hovered"]}`
          : styles["jewelry-card"]
      }
    >
      <LargeImages
        jewelriesByCategory={jewelriesByCategory}
        clickHandler={largeImagesClickHandler}
      />
      <DualTitleSection
        firstTitle={<PriceRange jewelriesByCategory={jewelriesByCategory} />}
        secondTitle={<StockStatus jewelriesByCategory={jewelriesByCategory} />}
        variant={"regular"}
      />
      <div className={styles["button"]}>
        <Button
          title={buttonTitle}
          buttonIsDisabled={isSoldOut}
          callBackFunction={toggleDisplayPopup}
          variant={"gray"}
        />
      </div>
    </article>
  );
};
