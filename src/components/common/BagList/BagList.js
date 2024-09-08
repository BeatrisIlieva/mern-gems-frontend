import { useLocation } from "react-router-dom";

import { JewelryCard } from "../../reusable/JewelryCard/JewelryCard";
import { DualTitleSection } from "../../reusable/DualTitleSection/DualTitleSection";
import { UpdateQuantity } from "./UpdateQuantity/UpdateQuantity";
import { Buttons } from "./Buttons/Buttons";

import { useBagContext } from "../../../contexts/BagContext";

import styles from "./BagList.module.css";

export const BagList = ({ variant }) => {
  const location = useLocation();

  const displayUpdateQuantityButtons =
    location.pathname !== "/checkout" &&
    location.pathname !== "/checkout/payment";

  const { bagItems } = useBagContext();

  return (
    <ul role="list" className={`${styles["bag-list"]} ${styles[variant]}`} data-testid="bag-list">
      {bagItems.map((item) => (
        <li key={item.bagId} className={styles["wrapper"]}>
          <JewelryCard
            firstImageUrl={item.firstImageUrl}
            jewelryTitle={item.jewelryTitle}
          />
          <div className={styles["info"]}>
            <DualTitleSection
              firstTitle={item.jewelryTitle}
              secondTitle={`$${item.totalPrice}`}
              variant={"bolded"}
            />
            {displayUpdateQuantityButtons && (
              <span className={styles["size"]}>Size: {item.size}</span>
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
                  `Size: ${item.size}`
                )
              }
              secondTitle={
                displayUpdateQuantityButtons ? (
                  <UpdateQuantity
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
