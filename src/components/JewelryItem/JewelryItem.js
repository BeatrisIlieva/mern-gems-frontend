import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import { Images } from "./Images/Images";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { InfoAndAction } from "./InfoAndAction/InfoAndAction";
import { MiniBag } from "../MiniBag/MiniBag";
import { Nav } from "./Nav/Nav";

import { useJewelryItemContext } from "../../contexts/JewelryItemContext";

import { useService } from "../../hooks/useService";

import { jewelryServiceFactory } from "../../services/jewelryService";

import { EARRING_ID } from "../../constants/earringId";

import styles from "./JewelryItem.module.css";

export const JewelryItem = () => {
  const [displayMiniBagPopup, setDisplayMiniBagPopup] = useState(false);

  const { jewelryId } = useParams();

  const location = useLocation();
  const pathname = location.pathname;
  const pathSegments = pathname.replace(/^\/+/, "").split("/");
  const collection = pathSegments[0];
  const category = pathSegments[1];

  const {
    sizes,
    updateSizeIsSelected,
    updateJewelry,
    updateSizes,
    toggleIsLoading,
    updateIsSoldOut,
    updateCategoryIsEarring,
    isLoading,
  } = useJewelryItemContext();

  const jewelryService = useService(jewelryServiceFactory);

  useEffect(() => {
    toggleIsLoading();

    jewelryService
      .getOne(jewelryId)
      .then((data) => {
        updateJewelry(data[0]);

        updateSizes(data[0].sizes);

        updateCategoryIsEarring(data[0].category === EARRING_ID);

        updateSizeIsSelected(data[0].category === EARRING_ID);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        toggleIsLoading();
      });
  }, [jewelryId]);

  useEffect(() => {
    const allZero = sizes.every((size) => size.quantity === 0);

    updateIsSoldOut(allZero);
  }, [sizes]);

  const toggleDisplayMiniBagPopup = () => {
    setDisplayMiniBagPopup((displayMiniBagPopup) => !displayMiniBagPopup);
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {displayMiniBagPopup && (
            <MiniBag toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup} />
          )}
          <section className={styles["jewelry-item"]}>
            <Nav collection={collection} category={category} />
            <div className={styles["jewelry-wrapper"]}>
              <Images />
              <InfoAndAction
                toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup}
              />
            </div>
          </section>
        </>
      )}
    </>
  );
};
