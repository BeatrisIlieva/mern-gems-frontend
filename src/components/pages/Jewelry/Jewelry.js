import { LargeImages } from "../../common/LargeImages/LargeImages";
import { MiniImages } from "../../common/MiniImages/MiniImages";
import { StockStatus } from "../../common/StockStatus/StockStatus";
import { Sizes } from "./Sizes/Sizes";
import { DualTitleSection } from "../../reusable/DualTitleSection/DualTitleSection";

import { useJewelryContext } from "../../../contexts/JewelryContext";

import { useService } from "../../../hooks/useService";
import { jewelryServiceFactory } from "../../../services/jewelryService";

import styles from "./Jewelry.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useJewelry } from "../../../hooks/useJewelry";

export const Jewelry = () => {
  const { categoryId, colorId } = useParams();

  const { jewelriesByCategory } = useJewelry({
    categoryId,
    colorId,
  });


  return (
    <>
      {jewelriesByCategory.length > 0 && (
        <section id={styles["jewelry"]}>
          <div className={styles["image-container"]}>
            <div className={styles["image"]}>
              <LargeImages jewelriesByCategory={jewelriesByCategory} />
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
            <h1 className={styles["title"]}>{jewelriesByCategory[0].title}</h1>
            <p className={styles["description"]}>
              {`${jewelriesByCategory[0].description}.`}
            </p>
            <Sizes jewelriesByCategory={jewelriesByCategory} />
          </div>
        </section>
      )}
    </>
  );
};
