import { useState } from "react";

import { DualTitleSection } from "../../../../../reusable/DualTitleSection/DualTitleSection";
import { PriceRange } from "../../../../../common/PriceRange/PriceRange";
import { StockStatus } from "../../../../../common/StockStatus/StockStatus";
import { LargeImages } from "../../../../../common/LargeImages/LargeImages";
import { Button } from "../../../../../reusable/Button/Button";

import { useLargeImagesClick } from "../../../../../../hooks/useLargeImagesClick";

export const JewelryCard = ({
  jewelriesByCategory,
  toggleDisplayPopup,
  isSoldOut,
}) => {
  const [articleIsHovered, setArticleIsHovered] = useState(false);

  const { largeImagesClickHandler } = useLargeImagesClick({
    categoryTitle,
    colorTitle,
  });

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
          title={"Move to Bag"}
          buttonIsDisabled={isSoldOut}
          callBackFunction={toggleDisplayPopup}
          variant={"gray"}
        />
      </div>
    </article>
  );
};
