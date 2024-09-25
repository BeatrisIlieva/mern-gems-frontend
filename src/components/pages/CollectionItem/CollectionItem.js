import { useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import { MiniBag } from "../../common/MiniBag/MiniBag";
import { Page404 } from "../Page404/Page404";
import { Images } from "../../reusable/Images/Images";
import { InfoAndAction } from "./InfoAndAction/InfoAndAction";
import { Nav } from "./Nav/Nav";

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

  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = useCallback(() => {
    setDisplayPopup((displayPopup) => !displayPopup);
  }, []);

  return (
    <>
      {displayPage404 ? (
        <Page404 />
      ) : (
        <>
          {displayPopup && (
            <MiniBag
              toggleDisplayMiniBagPopup={toggleDisplayPopup}
              displayPopup={displayPopup}
            />
          )}
          <section className={styles["collection-item"]}>
            <Nav />
            <div className={styles["wrapper"]}>
              <div className={styles["images"]}>
                {jewelriesByCategory.length > 0 && (
                  <Images jewelriesByCategory={jewelriesByCategory} />
                )}
              </div>
              <div className={styles["info-and-action"]}>
                {jewelriesByCategory.length > 0 && (
                  <InfoAndAction
                    jewelriesByCategory={jewelriesByCategory}
                    toggleDisplayPopup={toggleDisplayPopup}
                  />
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
