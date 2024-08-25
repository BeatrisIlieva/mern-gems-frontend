import { useState } from "react";
import { useParams } from "react-router-dom";

import { MiniBag } from "./MiniBag/MiniBag";
import { Page404 } from "../Page404/Page404";
import { Images } from "./Images/Images";
import { InfoAndAction } from "./InfoAndAction/InfoAndAction";

import { useIsTransitioning } from "../../../hooks/useIsTransitioning";

import { useJewelry } from "../../../hooks/useJewelry";
import { deslugify } from "../../../utils/deslugify";

import styles from "./CollectionItem.module.css";

export const CollectionItem = () => {
  const { slugifiedCategoryTitle, slugifiedColorTitle } = useParams();

  const categoryTitle = deslugify(slugifiedCategoryTitle);

  const colorTitle = deslugify(slugifiedColorTitle);

  const { jewelriesByCategory, displayPage404 } = useJewelry({
    categoryTitle,
    colorTitle,
  });

  const { isTransitioning } = useIsTransitioning();

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
          {jewelriesByCategory.length > 0 && (
            <>
              {displayPopup && (
                <MiniBag toggleDisplayMiniBagPopup={toggleDisplayPopup} />
              )}
              <section className={styles["collection-item"]}>
                <Images
                  jewelriesByCategory={jewelriesByCategory}
                  isTransitioning={isTransitioning}
                />
                <InfoAndAction
                  jewelriesByCategory={jewelriesByCategory}
                  isTransitioning={isTransitioning}
                  toggleDisplayPopup={toggleDisplayPopup}
                />
              </section>
            </>
          )}
        </>
      )}
    </>
  );
};
