import { useState, useEffect } from "react";

import { useService } from "../../hooks/useService";

import { Link, useParams } from "react-router-dom";

import { jewelryServiceFactory } from "../../services/jewelryService";

import { Image } from "./Image/Image";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

import { NormalTitle } from "../NormalTitle/NormalTitle";
import { LargeTitle } from "../LargeTitle/LargeTitle";
import { Form } from "./Form/Form";

import { useJewelryItemContext } from "../../contexts/JewelryItemContext";

import { EARRING_ID } from "../../constants/earringId";

import { MiniBag } from "../MiniBag/MiniBag";

import { useLocation } from "react-router-dom";

import { transformUrlSegment } from "../../utils/transformUrlSegment";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../Icon/Icon";

import styles from "./JewelryItem.module.css";

export const JewelryItem = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Remove leading slash and split the pathname
  const pathSegments = pathname.replace(/^\/+/, "").split("/");

  // Extract the segments you need
  const collection = pathSegments[0];
  const category = pathSegments[1];
  const title = pathSegments[2];
  const id = pathSegments[3];

  const {
    sizes,
    updateSizeIsSelected,
    jewelry,
    updateJewelry,
    updateSizes,
    toggleIsLoading,
    updateIsSoldOut,
  } = useJewelryItemContext();

  const jewelryService = useService(jewelryServiceFactory);
  const { jewelryId } = useParams();

  useEffect(() => {
    toggleIsLoading();

    jewelryService
      .getOne(jewelryId)
      .then((data) => {
        updateJewelry(data[0]);

        updateSizes(data[0].sizes);

        updateSizeIsSelected(data[0].category === EARRING_ID);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        toggleIsLoading();
      });
  }, [jewelryId]);

  const [displayMiniBagPopup, setDisplayMiniBagPopup] = useState(false);

  const toggleDisplayMiniBagPopup = () => {
    setDisplayMiniBagPopup((displayMiniBagPopup) => !displayMiniBagPopup);
  };

  useEffect(() => {
    const allZero = sizes.every((size) => size.quantity === 0);

    updateIsSoldOut(allZero);
  }, [sizes]);

  const collectionTitle = transformUrlSegment(collection);
  const categoryTitle = transformUrlSegment(category);

  return (
    <>
      {jewelry ? (
        <>
          {displayMiniBagPopup && (
            <MiniBag toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup} />
          )}
          <section className={styles["jewelry-item"]}>
            <nav className={styles["nav"]}>
              <Link to={`/${collection}`} className={styles["nav-item"]}>{`${collectionTitle}`}</Link>
              <Icon icon={faCircle} variant={"jewelry-item"} />
              <Link to={`/${collection}/${category}`} className={styles["nav-item"]}>{`${categoryTitle}`}</Link>
            </nav>
            <div className={styles["jewelry-wrapper"]}>
              <div className={styles["left-container"]}>
                <Image />
              </div>
              <div className={styles["right-container"]}>
                <LargeTitle title={jewelry.title} variant={"large-title"} />
                <p className={styles["description"]}>
                  {jewelry.description}.{" "}
                  {jewelry.sizes &&
                    jewelry.category === EARRING_ID &&
                    jewelry.sizes[0].measurement}
                </p>
                {jewelry.category !== EARRING_ID && (
                  <NormalTitle title={"Size:"} variant={"bolded"} />
                )}
                <Form toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup} />
              </div>
            </div>
          </section>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};
