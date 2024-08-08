import { useBagContext } from "../../../contexts/BagContext";

import { HorizontalLine } from "../../HorizontalLine/HorizontalLine";
import { ContainerTitle } from "../../ContainerTitle/ContainerTitle";
import { SectionContainer } from "./SectionContainer/SectionContainer";
import styles from "./OrderSummary.module.css";

export const OrderSummary = () => {
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
      <HorizontalLine variant={"large"} />
      <SectionContainer
        firstTitle={"Total"}
        secondTitle={`$ ${totalPrice}`}
        variant={"bolded"}
      />
    </section>
  );
};
