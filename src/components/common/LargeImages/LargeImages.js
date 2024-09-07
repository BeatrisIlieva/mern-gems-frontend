import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { JewelryImage } from "../JewelryImage/JewelryImage";
import { CircleIcons } from "../CircleIcons/CircleIcons";
import Heart from "../Heart/Heart";
import { DualTitleSection } from "../../reusable/DualTitleSection/DualTitleSection";

import { slugify } from "../../../utils/slugify";

import styles from "./LargeImages.module.css";

export const LargeImages = ({
  jewelriesByCategory,
  toggleDisplayMiniBagPopup,
}) => {
  const [firstImageUrlIsActive, setFirstImageUrlIsActive] = useState(true);

  useEffect(() => {
    setFirstImageUrlIsActive(true);
  }, [jewelriesByCategory[0].color]);

  const toggleFirstImageUrlIsActive = () => {
    setFirstImageUrlIsActive((firstImageUrlIsActive) => !firstImageUrlIsActive);
  };

  const navigate = useNavigate();

  const clickHandler = () => {
    const categoryTitle = jewelriesByCategory[0].categories[0].title;

    const colorTitle = jewelriesByCategory[0].colors[0].title;

    const slugifiedCategoryTitle = slugify(categoryTitle);

    const slugifiedColorTitle = slugify(colorTitle);

    if (toggleDisplayMiniBagPopup) {
      toggleDisplayMiniBagPopup();
    }

    navigate(`/collection/${slugifiedCategoryTitle}/${slugifiedColorTitle}`);
  };



  return (
    <div className={styles["large-images"]}>
      <DualTitleSection
        firstTitle={
          <CircleIcons
            firstImageUrlIsActive={firstImageUrlIsActive}
            toggleFirstImageUrlIsActive={toggleFirstImageUrlIsActive}
            firstImageUrl={jewelriesByCategory[0].firstImageUrl}
            secondImageUrl={jewelriesByCategory[0].secondImageUrl}
          />
        }
        secondTitle={
          <Heart
            categoryId={jewelriesByCategory[0].category}
            colorId={jewelriesByCategory[0].color}
          />
        }
        variant={"bolded"}
      />
      <div className={styles["image-container"]}>
        <JewelryImage
          firstImageUrlIsActive={firstImageUrlIsActive}
          firstImageUrl={jewelriesByCategory[0].firstImageUrl}
          secondImageUrl={jewelriesByCategory[0].secondImageUrl}
          title={jewelriesByCategory[0].title}
          clickHandler={clickHandler}
        />
      </div>
    </div>
  );
};
