import { useState, useEffect } from "react";

import { useService } from "../../hooks/useService";

import { useParams } from "react-router-dom";

import { jewelryServiceFactory } from "../../services/jewelryService";

import { Image } from "./Image/Image";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

import { SmallTitle } from "../SmallTitle/SmallTitle";
import { LargeTitle } from "../LargeTitle/LargeTitle";
import { Form } from "./Form/Form";

import { useJewelryItemContext } from "../../contexts/JewelryItemContext";

import { EARRING_ID } from "../../constants/earringId";

import { Bag } from "../Bag/Bag";

import styles from "./JewelryItem.module.css";

export const JewelryItem = () => {
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

  const [displayBagPopup, setDisplayBagPopup] = useState(false);

  const toggleDisplayBagPopup = () => {
    setDisplayBagPopup((displayBagPopup) => !displayBagPopup);
  };

  useEffect(() => {
    const allZero = sizes.every((size) => size.quantity === 0);

    updateIsSoldOut(allZero);
  }, [sizes]);

  return (
    <>
      {jewelry ? (
        <>
          {displayBagPopup && (
            <Bag toggleDisplayBagPopup={toggleDisplayBagPopup} />
          )}
          <section className={styles["jewelry-wrapper"]}>
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
                <SmallTitle title={"Size:"} />
              )}
              <Form toggleDisplayBagPopup={toggleDisplayBagPopup} />
            </div>
          </section>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );

  // return (
  //   <>
  //     {loading ? (
  //       <LoadingSpinner />
  //     ) : (
  //       <>
  //         {displayBagPopup && (
  //           <Bag toggleDisplayBagPopup={toggleDisplayBagPopup} />
  //         )}
  //         <section className={styles["jewelry-wrapper"]}>
  //           <div className={styles["left-container"]}>
  //             <Image />
  //           </div>
  //           <div className={styles["right-container"]}>
  //             <LargeTitle title={jewelry.title} variant={"large-title"} />
  //             <p className={styles["description"]}>
  //               {jewelry.description}.{" "}
  //               {jewelry.sizes &&
  //                 jewelry.category === EARRING_ID &&
  //                 jewelry.sizes[0].measurement}
  //             </p>
  //             {jewelry.category !== EARRING_ID && (
  //               <SmallTitle title={"Size:"} />
  //             )}
  //             <Form toggleDisplayBagPopup={toggleDisplayBagPopup} />
  //           </div>
  //         </section>
  //       </>
  //     )}
  //   </>
  // );
};
