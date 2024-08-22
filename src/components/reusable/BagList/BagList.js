import { useLocation } from "react-router-dom";

import { JewelryCard } from "../../common/JewelryCard/JewelryCard";
import { DualTitleSection } from "../DualTitleSection/DualTitleSection";
import { Remove } from "./Remove/Remove";
import { Quantity } from "./Quantity/Quantity";

import { useBagContext } from "../../../contexts/BagContext";

import styles from "./BagList.module.css";

export const BagList = ({ variant }) => {
  const location = useLocation();

  const displayUpdateQuantityButtons =
    location.pathname !== "/checkout" && location.pathname !== "/payment";

  const { bagItems } = useBagContext();

  return (
    <ul role="list" className={`${styles["bag-list"]} ${styles[variant]}`}>
      {bagItems.map((item) => (
        <li key={item.bagId} className={styles["wrapper"]}>
          <JewelryCard
            firstImageUrl={item.firstImageUrl}
            jewelryTitle={item.jewelryTitle}
          />
          <div className={styles["info"]}>
            <DualTitleSection
              firstTitle={item.jewelryTitle}
              secondTitle={`$ ${item.totalPrice}`}
              variant={"bolded"}
            />
            {displayUpdateQuantityButtons && <span>Size: {item.size}</span>}
            <DualTitleSection
              firstTitle={
                displayUpdateQuantityButtons ? (
                  <Remove bagId={item.bagId} />
                ) : (
                  `Size: ${item.size}`
                )
              }
              secondTitle={
                displayUpdateQuantityButtons ? (
                  <Quantity
                    bagId={item.bagId}
                    bagQuantity={item.quantity}
                    inventoryQuantity={item.inventoryQuantity}
                  />
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
