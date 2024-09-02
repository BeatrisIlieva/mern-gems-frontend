import { useState } from "react";
import { useParams } from "react-router-dom";

import { MiniBag } from "./MiniBag/MiniBag";
import { Page404 } from "../Page404/Page404";
import { Images } from "./Images/Images";
import { InfoAndAction } from "./InfoAndAction/InfoAndAction";

import { useJewelry } from "../../../hooks/useJewelry";

import { deslugify } from "../../../utils/deslugify";

import styles from "./CollectionItem.module.css";

export const CollectionItem = () => {
  const { slugifiedCategoryTitle, slugifiedColorTitle } = useParams();

  const categoryTitle = deslugify(slugifiedCategoryTitle);

  const colorTitle = deslugify(slugifiedColorTitle);

  const { jewelriesByCategory, displayPage404, isLoading } = useJewelry({
    categoryTitle,
    colorTitle,
  });

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
          {displayPopup && (
            <MiniBag toggleDisplayMiniBagPopup={toggleDisplayPopup} />
          )}
          <section className={styles["collection-item"]}>
            <Images
              jewelriesByCategory={jewelriesByCategory}
              isLoading={isLoading}
            />
            <InfoAndAction
              jewelriesByCategory={jewelriesByCategory}
              isLoading={isLoading}
              toggleDisplayPopup={toggleDisplayPopup}
            />
          </section>
        </>
      )}
    </>
  );
};
