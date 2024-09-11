import { useState, useEffect, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";

import { MiniBag } from "./MiniBag/MiniBag";
import { Page404 } from "../Page404/Page404";
import { Images } from "./Images/Images";
import { InfoAndAction } from "./InfoAndAction/InfoAndAction";

import { useJewelry } from "../../../hooks/useJewelry";

import { deslugify } from "../../../utils/deslugify";

import styles from "./CollectionItem.module.css";

export const CollectionItem = () => {
  const popupRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        toggleDisplayPopup();
      }
    };

    // Bind the event listener when the popup is open
    if (displayPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [displayPopup]);

  return (
    <>
      {displayPage404 ? (
        <Page404 />
      ) : (
        <>
          {displayPopup && (
            <MiniBag toggleDisplayMiniBagPopup={toggleDisplayPopup} popupRef={popupRef}/>
          )}
          <section className={styles["collection-item"]}>
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
          </section>
        </>
      )}
    </>
  );
};
