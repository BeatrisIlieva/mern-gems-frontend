import { useLocation } from "react-router-dom";

import { JewelryCard } from "../../reusable/JewelryCard/JewelryCard";
import { DualTitleSection } from "../../reusable/DualTitleSection/DualTitleSection";
import { UpdateQuantity } from "./UpdateQuantity/UpdateQuantity";
import { Buttons } from "./Buttons/Buttons";

import { useBagContext } from "../../../contexts/BagContext";
import { useLanguageContext } from "../../../contexts/LanguageContext";

import { SIZE_NAMING } from "../../../constants/languageRelated";
import { QUANTITY_NAMING } from "./constants/languageRelated";

import { CATEGORY_NAMES_BY_LANGUAGE } from "../../../mappers/categoryNamesByLanguage";

import styles from "./BagList.module.css";

export const BagList = ({ variant }) => {
  const { language } = useLanguageContext();

  const location = useLocation();

  const displayUpdateQuantityButtons =
    location.pathname !== "/checkout" &&
    location.pathname !== "/checkout/payment";

  const { bagItems, isProcessing, processingBagId } = useBagContext();

  return (
    <ul
      role="list"
      className={`${styles["bag-list"]} ${styles[variant]}`}
      data-testid="bag-list"
    >
      {bagItems.map((item) => (
        <li key={item.bagId} className={styles["wrapper"]}>
          <JewelryCard
            firstImageUrl={item.firstImageUrl}
            jewelryTitle={CATEGORY_NAMES_BY_LANGUAGE[item.categoryId][language]}
          />
          <div className={styles["info"]}>
            <DualTitleSection
              firstTitle={CATEGORY_NAMES_BY_LANGUAGE[item.categoryId][language]}
              secondTitle={`$${item.totalPrice}`}
              variant={"bolded"}
            />
            {displayUpdateQuantityButtons && (
              <span className={styles["size"]}>
                {SIZE_NAMING[language]} {item.size}
              </span>
            )}
            <DualTitleSection
              firstTitle={
                displayUpdateQuantityButtons ? (
                  <Buttons
                    bagId={item.bagId}
                    categoryId={item.categoryId}
                    colorId={item.colorId}
                  />
                ) : (
                  `${SIZE_NAMING[language]}: ${item.size}`
                )
              }
              secondTitle={
                displayUpdateQuantityButtons ? (
                  <UpdateQuantity
                    bagId={item.bagId}
                    bagQuantity={item.quantity}
                    inventoryQuantity={item.inventoryQuantity}
                    isProcessing={isProcessing}
                    processingBagId={processingBagId}
                  />
                ) : (
                  `${QUANTITY_NAMING[language]} ${item.quantity}`
                )
              }
              variant={"regular"}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
