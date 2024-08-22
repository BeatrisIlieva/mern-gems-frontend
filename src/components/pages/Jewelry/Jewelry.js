import { useState } from "react";
import { useParams } from "react-router-dom";

import { LargeImages } from "../../common/LargeImages/LargeImages";
import { MiniImages } from "../../common/MiniImages/MiniImages";
import { StockStatus } from "../../common/StockStatus/StockStatus";
import { Form } from "./Form/Form";
import { DualTitleSection } from "../../reusable/DualTitleSection/DualTitleSection";
import { MiniBag } from "./MiniBag/MiniBag";
import { LargeTitle } from "../../reusable/LargeTitle/LargeTitle";
import { Paragraph } from "../../reusable/Paragraph/Paragraph";

import { useJewelry } from "../../../hooks/useJewelry";
import { deslugify } from "../../../utils/deslugify";

import styles from "./Jewelry.module.css";

export const Jewelry = () => {
  const { slugifiedCategoryTitle, slugifiedColorTitle } = useParams();

  const categoryTitle = deslugify(slugifiedCategoryTitle);

  const colorTitle = deslugify(slugifiedColorTitle);

  const { jewelriesByCategory } = useJewelry({
    categoryTitle,
    colorTitle,
  });

  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = () => {
    setDisplayPopup((displayPopup) => !displayPopup);
  };

  return (
    <>
      {jewelriesByCategory.length > 0 && (
        <>
          {displayPopup && (
            <MiniBag toggleDisplayMiniBagPopup={toggleDisplayPopup} />
          )}
          <section id={styles["jewelry"]}>
            <div className={styles["image-container"]}>
              <div className={styles["image"]}>
                <LargeImages
                  jewelriesByCategory={jewelriesByCategory}
                  circleIconsPosition={"bottom"}
                />
              </div>
            </div>
            <div className={styles["info-and-action-container"]}>
              <DualTitleSection
                firstTitle={
                  <div className={styles["mini-images"]}>
                    <MiniImages jewelriesByCategory={jewelriesByCategory} />
                  </div>
                }
                secondTitle={
                  <StockStatus jewelriesByCategory={jewelriesByCategory} />
                }
                variant={"regular"}
              />
              <LargeTitle title={jewelriesByCategory[0].title} />
              <Paragraph
                text={`${jewelriesByCategory[0].description}.`}
                textAlign={"left"}
              />
              <Form
                jewelriesByCategory={jewelriesByCategory}
                toggleDisplayPopup={toggleDisplayPopup}
              />
            </div>
          </section>
        </>
      )}
    </>
  );
};
