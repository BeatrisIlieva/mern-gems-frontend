import { useState, useEffect, useCallback } from "react";

import { CursorImageEffect } from "../../../../common/CursorImageEffect/CursorImageEffect";
import { XMark } from "../../../../reusable/XMark/XMark";
import { Form } from "./Form/Form";
import { Images } from "../../../CollectionItem/Images/Images";
import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";
import { Paragraph } from "../../../../reusable/Paragraph/Paragraph";
import { JewelryImage } from "../../../../reusable/JewelryImage/JewelryImage";
import { MiniImages } from "../../../../reusable/MiniImages/MiniImages";
import { StockStatus } from "../../../../common/StockStatus/StockStatus";
import { DualTitleSection } from "../../../../reusable/DualTitleSection/DualTitleSection";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";
import { usePopup } from "../../../../../hooks/usePopup";
import { useJewelry } from "../../../../../hooks/useJewelry";
import { useBagContext } from "../../../../../contexts/BagContext";

import { jewelryServiceFactory } from "../../../../../services/jewelryService";
import { useService } from "../../../../../hooks/useService";

import { CATEGORIES_BY_ID } from "../../../../../constants/categoriesById";
import { COLORS_BY_ID } from "../../../../../constants/colorsById";

import { CATEGORY_NAMES_BY_LANGUAGE } from "../../../../../constants/categoryNamesByLanguage";

import styles from "./Popup.module.css";

// export const Popup = ({
//   toggleDisplayPopup,
//   displayPopup,
//   categoryTitle,
//   colorTitle,
// }) => {
//   const { language } = useLanguageContext();

//   const { isTransitioning, popupRef, popupCloseHandler } = usePopup({
//     toggleDisplayPopup,
//     displayPopup,
//   });

//   const [selectedColor, setSelectedColor] = useState(colorTitle);

//   const updateSelectedColor = useCallback(
//     (color) => {
//       setSelectedColor(color);
//     },
//     [setSelectedColor]
//   );

// //   const { jewelriesByCategory} = useJewelry({
// //     categoryTitle,
// //     colorTitle: selectedColor,
// //   });

// //   console.log(jewelriesByCategory);

// const [jewelriesByCategory, setJewelriesByCategory] = useState([]);

// const { bagTotalQuantity } = useBagContext();

// const [jewelryService, setJewelryService] = useState(
//   useService(jewelryServiceFactory)
// );

// const [displayPage404, setDisplayPage404] = useState(false);

// const categoryId = CATEGORIES_BY_ID[categoryTitle];
// const colorId = COLORS_BY_ID[colorTitle];

// useEffect(() => {
//   jewelryService
//     .getOne(categoryId, colorId)
//     .then((data) => {
//       setJewelriesByCategory(data);

//       setDisplayPage404(false);
//     })
//     .catch((err) => {
//       console.log(err.message);

//       setDisplayPage404(true);
//     });
// }, [categoryTitle, jewelryService, bagTotalQuantity, selectedColor]);

// //   const categoryId = jewelriesByCategory[0].category;
//   const jewelryTitle = CATEGORY_NAMES_BY_LANGUAGE[categoryId][language];

//   return (
//     <>
//       {jewelriesByCategory.length > 0 && (
//         <section
//           className={`${styles["overlay"]} ${
//             isTransitioning ? styles["transition-out"] : styles["transition-in"]
//           }`}
//         >
//           <CursorImageEffect />
//           <div
//             ref={popupRef}
//             className={`${styles["modal"]} ${
//               isTransitioning ? styles["slide-out"] : styles["slide-in"]
//             }`}
//           >
//             {/* <XMark callbackFunction={popupCloseHandler} /> */}
//             <MiniImages
//               jewelriesByCategory={jewelriesByCategory}
//               clickHandler={updateSelectedColor}
//             />
//             <div className={styles["add-to-bag"]}>
//               <div className={styles["wrapper"]}>
//                 <div className={styles["images"]}>
//                   {/* <div className={styles["thumbnail"]}> */}
//                   <img
//                     className={styles["image"]}
//                     src={jewelriesByCategory[0].firstImageUrl}
//                     alt=""
//                   />
//                   {/* </div> */}
//                   {/* <div className={styles["thumbnail"]}> */}
//                   <img
//                     className={styles["image"]}
//                     src={jewelriesByCategory[0].secondImageUrl}
//                     alt=""
//                   />
//                   {/* </div> */}
//                 </div>
//                 <div className={styles["info-and-action-wrapper"]}>
//                   <div>
//                     <LargeTitle title={jewelryTitle} textAlign={"left"} />
//                     <Paragraph
//                       text={`${jewelriesByCategory[0].description[language]}`}
//                       textAlign={"left"}
//                       color={"gray"}
//                     />
//                   </div>
//                   <Form
//                     jewelriesByCategory={jewelriesByCategory}
//                     toggleDisplayPopup={toggleDisplayPopup}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}
//     </>
//   );
// };

export const Popup = ({
  toggleDisplayPopup,
  displayPopup,
  categoryTitle,
  colorTitle,
}) => {
  const { language } = useLanguageContext();

  const { isTransitioning, popupRef, popupCloseHandler } = usePopup({
    toggleDisplayPopup,
    displayPopup,
  });

  // State to track if color has been set initially from props
  const [isColorInitialized, setIsColorInitialized] = useState(false);

  // Initialize selected color with colorTitle prop (only the first time)
  const [selectedColor, setSelectedColor] = useState(colorTitle);

  // Function to update selected color (for subsequent updates)
  const updateSelectedColor = useCallback(
    (color) => {
      setSelectedColor(color);
    },
    [setSelectedColor]
  );

  // useEffect to set selectedColor from props only the first time the component mounts
  useEffect(() => {
    if (!isColorInitialized) {
      setSelectedColor(colorTitle);
      setIsColorInitialized(true); // Mark color as initialized so it won't reset on re-renders
    }
  }, [colorTitle, isColorInitialized]);

  const [jewelriesByCategory, setJewelriesByCategory] = useState([]);

  const { bagTotalQuantity } = useBagContext();

  const [jewelryService, setJewelryService] = useState(
    useService(jewelryServiceFactory)
  );

  const [displayPage404, setDisplayPage404] = useState(false);

  const categoryId = CATEGORIES_BY_ID[categoryTitle];
  const colorId = COLORS_BY_ID[selectedColor]; // Use selectedColor here

  useEffect(() => {
    jewelryService
      .getOne(categoryId, colorId)
      .then((data) => {
        setJewelriesByCategory(data);
        setDisplayPage404(false);
      })
      .catch((err) => {
        console.log(err.message);
        setDisplayPage404(true);
      });
  }, [categoryTitle, jewelryService, bagTotalQuantity, selectedColor]);

  const jewelryTitle = CATEGORY_NAMES_BY_LANGUAGE[categoryId][language];

  return (
    <>
      {jewelriesByCategory.length > 0 && (
        <section
          className={`${styles["overlay"]} ${
            isTransitioning ? styles["transition-out"] : styles["transition-in"]
          }`}
        >
          <CursorImageEffect />
          <div
            ref={popupRef}
            className={`${styles["modal"]} ${
              isTransitioning ? styles["slide-out"] : styles["slide-in"]
            }`}
          >
            <div className={styles["add-to-bag"]}>
              <div className={styles["wrapper"]}>
                <div className={styles["images"]}>
                  <img
                    className={styles["image"]}
                    src={jewelriesByCategory[0].firstImageUrl}
                    alt=""
                  />
                  <img
                    className={styles["image"]}
                    src={jewelriesByCategory[0].secondImageUrl}
                    alt=""
                  />
                </div>
                <div className={styles["info-and-action-wrapper"]}>
                  <XMark callbackFunction={popupCloseHandler} />
                  <div className={styles["top-wrapper"]}>
                    <StockStatus jewelriesByCategory={jewelriesByCategory} />
                    <MiniImages
                      jewelriesByCategory={jewelriesByCategory}
                      clickHandler={updateSelectedColor} // Update color when a mini image is clicked
                    />
                  </div>
                  <div>
                    <LargeTitle title={jewelryTitle} textAlign={"left"} />
                    <Paragraph
                      text={`${jewelriesByCategory[0].description[language]}`}
                      textAlign={"left"}
                      color={"gray"}
                    />
                  </div>
                  <Form
                    jewelriesByCategory={jewelriesByCategory}
                    toggleDisplayPopup={toggleDisplayPopup}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
