import { ChildWrapper } from "../../../reusable/ChildWrapper/ChildWrapper";
import { BagHeader } from "../../../common/BagHeader/BagHeader";
import { BagList } from "../../../common/BagList/BagList";

export const BagContent = () => {
  return (
    <ChildWrapper>
      <>
        <BagHeader />
        <BagList />
      </>
    </ChildWrapper>
  );
};
