import { useLocation } from "react-router-dom";

import { HorizontalLine } from "../../../../reusable/HorizontalLine/HorizontalLine";
import { ContainerTitle } from "../../reusable/ContainerTitle/ContainerTitle"; 
import { DualTitleSection } from "../../../../reusable/DualTitleSection/DualTitleSection";

import { useBagContext } from "../../../../../contexts/BagContext";

import styles from "./OrderSummary.module.css";

export const OrderSummary = () => {
  const location = useLocation();

  const locationIsBag = location.pathname === "/users/shopping-bag";

  const { totalPrice } = useBagContext();

  return (
    <section className={styles["order-summary"]}>
      <ContainerTitle title={"Order Summary"} />
      <DualTitleSection
        firstTitle={"Subtotal"}
        secondTitle={`$ ${totalPrice}`}
        variant={"bolded"}
      />
      <DualTitleSection
        firstTitle={"Shipping"}
        secondTitle={"Complimentary"}
        variant={"regular"}
      />
      {locationIsBag && <HorizontalLine variantHr={"large"} />}
      <DualTitleSection
        firstTitle={"Total"}
        secondTitle={`$ ${totalPrice}`}
        variant={"bolded"}
      />
      {!locationIsBag && <HorizontalLine variantHr={"large"} />}
    </section>
  );
};
