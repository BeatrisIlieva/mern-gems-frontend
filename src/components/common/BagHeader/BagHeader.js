import { DualTitleSection } from "../../reusable/DualTitleSection/DualTitleSection";
import { LargeTitle } from "../../reusable/LargeTitle/LargeTitle";
import { Delivery } from "./Delivery/Delivery";

export const BagHeader = () => {
  return (
    <DualTitleSection
      firstTitle={<LargeTitle title={"My Bag"} />}
      secondTitle={<Delivery />}
      variant={"bolded"}
    />
  );
};
