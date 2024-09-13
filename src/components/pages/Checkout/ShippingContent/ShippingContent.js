import { ChildWrapper } from "../../../reusable/ChildWrapper/ChildWrapper";
import { LargeTitle } from "../../../reusable/LargeTitle/LargeTitle";
import { ShippingDetailsForm } from "../../../common/ShippingDetailsForm/ShippingDetailsForm";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

import { SHIPPING_ADDRESS_NAMING } from "../../../../constants/languageRelated";

export const ShippingContent = () => {
  const { language } = useLanguageContext();

  return (
    <ChildWrapper>
      <>
        <LargeTitle title={SHIPPING_ADDRESS_NAMING[language]} />
        <ShippingDetailsForm />
      </>
    </ChildWrapper>
  );
};
