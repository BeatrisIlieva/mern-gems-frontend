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

  // const toggleDisplayPopup = useCallback(() => {
  //   setDisplayPopup((displayPopup) => !displayPopup);
  // }, []);

  const [movePopup, setMovePopup] = useState(false);

  // const toggleDisplayPopup = () => {
  //   setMovePopup(true);

  //   setTimeout(async () => {
  //     setDisplayPopup((displayPopup) => !displayPopup);
  //     setMovePopup(false);
  //   }, 400);
  // };

  const toggleDisplayPopup = () => {
    return new Promise((resolve) => {
      setMovePopup(true);
  
      // Simulate a delay for the closing animation
      setTimeout(() => {
        setDisplayPopup((displayPopup) => !displayPopup);
        setMovePopup(false);
        resolve();  // Resolve after the closing animation is done
      }, 400);  // Adjust based on the duration of your animation (e.g., 300ms)
    });
  };

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
              movePopup={movePopup}
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
