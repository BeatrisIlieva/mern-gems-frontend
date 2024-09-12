import { Link } from "react-router-dom";

import { OrderSummary } from "../../../../common/OrderSummary/OrderSummary";
import { Button } from "../../../../reusable/Button/Button";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";

import { CONTINUE_CHECKOUT_BUTTON_NAMING } from "../../../../../constants/languageRelated";

import styles from "./OrderSummaryContent.module.css";

export const OrderSummaryContent = () => {
  const { language } = useLanguageContext();

  return (
    <>
      <OrderSummary />
      <Link to={"/checkout"} className={styles["no-decoration"]}>
        <Button
          title={CONTINUE_CHECKOUT_BUTTON_NAMING[language]}
          buttonIsDisabled={false}
          variant={"gray"}
        />
      </Link>
    </>
  );
};
