import { DualTitleSection } from "../../reusable/DualTitleSection/DualTitleSection";
import { LargeTitle } from "../../reusable/LargeTitle/LargeTitle";
import { Delivery } from "./Delivery/Delivery";
import { BagCount } from "./Delivery/BagCount/BagCount";

export const BagHeader = () => {
  return (
    // <DualTitleSection
    //   firstTitle={<LargeTitle title={"My Bag"} />}
    //   secondTitle={<Delivery />}
    //   variant={"bolded"}
    // />
    <DualTitleSection
      firstTitle={<Delivery />}
      secondTitle={<BagCount/>}
      variant={"bolded"}
    />
  );
};
