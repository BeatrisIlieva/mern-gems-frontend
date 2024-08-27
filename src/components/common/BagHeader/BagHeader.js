import { DualTitleSection } from "../../reusable/DualTitleSection/DualTitleSection";
import { Delivery } from "./Delivery/Delivery";
import { BagCount } from "./BagCount/BagCount";

export const BagHeader = () => {
  return (
    <DualTitleSection
      firstTitle={<Delivery />}
      secondTitle={<BagCount />}
      variant={"bolded"}
    />
  );
};
