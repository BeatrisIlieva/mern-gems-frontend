import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { LargeImages } from "../../common/LargeImages/LargeImages";
import { MiniImages } from "../../common/MiniImages/MiniImages";
import { StockStatus } from "../../common/StockStatus/StockStatus";
import { Form } from "./Form/Form";
import { DualTitleSection } from "../../reusable/DualTitleSection/DualTitleSection";
import { MiniBag } from "./MiniBag/MiniBag";
import { LargeTitle } from "../../reusable/LargeTitle/LargeTitle";
import { Paragraph } from "../../reusable/Paragraph/Paragraph";
import { Page404 } from "../Page404/Page404";

import { useService } from "../../../hooks/useService";

import { jewelryServiceFactory } from "../../../services/jewelryService";

import { useJewelry } from "../../../hooks/useJewelry";
import { deslugify } from "../../../utils/deslugify";

import styles from "./Jewelry.module.css";

export const Jewelry = () => {
  const { slugifiedCategoryTitle, slugifiedColorTitle } = useParams();

  const categoryTitle = deslugify(slugifiedCategoryTitle);

  const colorTitle = deslugify(slugifiedColorTitle);

  const [displayPage404, setDisplayPage404] = useState(false);

  // const { jewelriesByCategory } = useJewelry({
  //   categoryTitle,
  //   colorTitle,
  // });

  const [jewelriesByCategory, setJewelriesByCategory] = useState([]);

  const jewelryService = useService(jewelryServiceFactory);

  useEffect(() => {
    jewelryService
      .getOne(categoryTitle, colorTitle)
      .then((data) => {
        setJewelriesByCategory(data);
      })
      .catch((err) => {
        console.log(err.message);
        setDisplayPage404(true);
      })
      .finally(() => {});
  }, [categoryTitle, colorTitle, jewelryService]);

  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = () => {
    setDisplayPopup((displayPopup) => !displayPopup);
  };

  return (
    <>
      {displayPage404 ? (
        <Page404 />
      ) : (
        <>
          {jewelriesByCategory.length > 0 ? (
            <>
              {displayPopup && (
                <MiniBag toggleDisplayMiniBagPopup={toggleDisplayPopup} />
              )}
              <section id={styles["jewelry"]}>
                <div className={styles["image-container"]}>
                  <LargeImages
                    jewelriesByCategory={jewelriesByCategory}
                    circleIconsPosition={"bottom"}
                    variant={"large"}
                  />
                </div>
                <div className={styles["info-and-action-container"]}>
                  <div className={styles["wrapper"]}>
                    <DualTitleSection
                      firstTitle={
                        <div className={styles["mini-images"]}>
                          <MiniImages
                            jewelriesByCategory={jewelriesByCategory}
                          />
                        </div>
                      }
                      secondTitle={
                        <StockStatus
                          jewelriesByCategory={jewelriesByCategory}
                        />
                      }
                      variant={"regular"}
                    />
                    <div className={styles["bottom"]}>
                      <LargeTitle title={jewelriesByCategory[0].title} />
                      <Paragraph
                        text={`${jewelriesByCategory[0].description}.`}
                        textAlign={"left"}
                      />
                    </div>
                  </div>
                  <Form
                    jewelriesByCategory={jewelriesByCategory}
                    toggleDisplayPopup={toggleDisplayPopup}
                  />
                </div>
              </section>
            </>
          ) : (
            <div className={styles["empty"]}></div>
          )}
        </>
      )}
    </>
  );
};
