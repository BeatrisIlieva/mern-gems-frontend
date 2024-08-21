import { useLocation } from "react-router-dom";

import { JewelryCard } from "../../common/JewelryCard/JewelryCard";
import { DualTitleSection } from "../DualTitleSection/DualTitleSection";
import { Remove } from "./Remove/Remove";

import { useBag } from "../../../hooks/useBag";
import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";
import { Quantity } from "./Quantity/Quantity";

import styles from "./BagList.module.css";

export const BagList = ({ variant }) => {
  const location = useLocation();

  const showRemoveButton =
    location.pathname !== "/checkout" && location.pathname !== "/payment";

  const { bagItems } = useBag();

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
            <span>Size: {item.size}</span>
            <DualTitleSection
              firstTitle={<Remove bagId={item.bagId} />}
              secondTitle={<Quantity quantity={item.quantity} />}
              variant={"regular"}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
