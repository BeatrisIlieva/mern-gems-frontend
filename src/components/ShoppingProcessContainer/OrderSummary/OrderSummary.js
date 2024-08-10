import { useLocation } from "react-router-dom";

import { HorizontalLine } from "../../HorizontalLine/HorizontalLine";
import { ContainerTitle } from "../ContainerTitle/ContainerTitle";
import { SectionContainer } from "../../SectionContainer/SectionContainer";

import { useBagContext } from "../../../contexts/BagContext";

import styles from "./OrderSummary.module.css";

export const OrderSummary = () => {
  const location = useLocation();

  const locationIsBag = location.pathname === "/users/shopping-bag";

  const { totalPrice } = useBagContext();

  return (
    <section className={styles["order-summary"]}>
      <ContainerTitle title={"Order Summary"} />
      <SectionContainer
        firstTitle={"Subtotal"}
        secondTitle={`$ ${totalPrice}`}
        variant={"bolded"}
      />
      <SectionContainer
        firstTitle={"Shipping"}
        secondTitle={"Complimentary"}
        variant={"regular"}
      />
      {locationIsBag && <HorizontalLine variantHr={"large"} />}
      <SectionContainer
        firstTitle={"Total"}
        secondTitle={`$ ${totalPrice}`}
        variant={"bolded"}
      />
      {!locationIsBag && <HorizontalLine variantHr={"large"} />}
    </section>
  );
};
