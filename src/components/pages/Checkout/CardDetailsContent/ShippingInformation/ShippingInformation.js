import { Button } from "../../../../reusable/Button/Button";
import { UserShippingDetails } from "./UserShippingDetails/UserShippingDetails";
import { UserLoginDetails } from "./UserLoginDetails/UserLoginDetails";
import { DualTitleSection } from "../../../../reusable/DualTitleSection/DualTitleSection";
import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";

import {
  SHIPPING_INFORMATION_NAMING,
  EDIT_BUTTON_NAMING,
} from "./constants/languageRelated";

import styles from "./ShippingInformation.module.css";

export const ShippingInformation = ({ toggleDisplayShippingDetailsPopup }) => {
  const { language } = useLanguageContext();

  return (
    <section className={styles["shipping-information"]}>
      <DualTitleSection
        firstTitle={
          <LargeTitle
            title={SHIPPING_INFORMATION_NAMING[language]}
            textAlign={"align-left"}
          />
        }
        secondTitle={
          <Button
            title={EDIT_BUTTON_NAMING[language]}
            callBackFunction={toggleDisplayShippingDetailsPopup}
            variant={"underlined"}
          />
        }
      />
      <UserLoginDetails />
      <UserShippingDetails
        toggleDisplayShippingDetailsPopup={toggleDisplayShippingDetailsPopup}
      />
    </section>
  );
};
