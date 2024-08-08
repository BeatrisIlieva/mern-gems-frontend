import { JewelryCard } from "../JewelryCard/JewelryCard";
import { SectionContainer } from "../SectionContainer/SectionContainer";

import { Remove } from "./Remove/Remove";

import styles from "./BagList.module.css";
import { useLocation } from "react-router-dom";

import { useBagContext } from "../../contexts/BagContext";

export const BagList = ({ variant }) => {
  const location = useLocation();

  const showRemoveButton =
    location.pathname !== "/checkout" && location.pathname !== "/payment";

  const { bagItems } = useBagContext();

  return (
    <ul role="list" className={styles[variant]}>
      {bagItems.map((item) => (
        <li key={item.bagId} className={styles["wrapper"]}>
          <JewelryCard
            jewelryId={item.jewelryId}
            firstImageUrl={item.firstImageUrl}
            isSoldOut={item.isSoldOut}
            collectionTitle={item.collectionTitle}
            categoryTitle={item.categoryTitle}
            jewelryTitle={item.jewelryTitle}
            variant={"bag-list"}
          />
          <div className={styles["info"]}>
            <SectionContainer
              firstTitle={item.jewelryTitle}
              secondTitle={`$ ${item.totalPrice}`}
              variant={"bolded"}
            />
            <SectionContainer
              firstTitle={`Size: ${item.size}`}
              secondTitle={
                showRemoveButton ? (
                  <Remove bagId={item.bagId} />
                ) : (
                  `Qty ${item.quantity}`
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
