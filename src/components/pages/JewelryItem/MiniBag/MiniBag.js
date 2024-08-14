import { NonEmptyMiniBag } from "./NonEmptyMiniBag/NonEmptyMiniBag";
import { EmptyMiniBag } from "./EmptyMiniBag/EmptyMiniBag";

import { useBagContext } from "../../../../contexts/BagContext";

export const MiniBag = ({ toggleDisplayMiniBagPopup }) => {
  const { bagTotalQuantity } = useBagContext();

  return (
    <>
      {bagTotalQuantity > 0 ? (
        <NonEmptyMiniBag
          toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup}
        />
      ) : (
        <EmptyMiniBag toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup} />
      )}
    </>
  );
};
