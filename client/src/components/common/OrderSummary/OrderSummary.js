import { useLocation } from "react-router-dom";

import { HorizontalLine } from "../../reusable/HorizontalLine/HorizontalLine";
import { LargeTitle } from "../../reusable/LargeTitle/LargeTitle";
import { DualTitleSection } from "../../reusable/DualTitleSection/DualTitleSection";

import { useBagContext } from "../../../contexts/BagContext";
import { useLanguageContext } from "../../../contexts/LanguageContext";

import {
  ORDER_SUMMARY_NAMING,
  SUBTOTAL_NAMING,
  SHIPPING_NAMING,
  COMPLIMENTARY_NAMING,
  TOTAL_NAMING,
} from "./constants/languageRelated";

import styles from "./OrderSummary.module.css";

export const OrderSummary = () => {
  const { language } = useLanguageContext();

  const location = useLocation();

  const locationIsBag = location.pathname === "/users/shopping-bag";

  const { totalPrice } = useBagContext();

  return (
    <section className={styles["order-summary"]}>
      <LargeTitle title={ORDER_SUMMARY_NAMING[language]} />
      <DualTitleSection
        firstTitle={SUBTOTAL_NAMING[language]}
        secondTitle={`$ ${totalPrice}`}
        variant={"bolded"}
      />
      <DualTitleSection
        firstTitle={SHIPPING_NAMING[language]}
        secondTitle={COMPLIMENTARY_NAMING[language]}
        variant={"regular"}
      />
      {locationIsBag && <HorizontalLine variantHr={"large"} />}
      <DualTitleSection
        firstTitle={TOTAL_NAMING[language]}
        secondTitle={`$ ${totalPrice}`}
        variant={"bolded"}
      />
      {!locationIsBag && <HorizontalLine variantHr={"large"} />}
    </section>
  );
};
