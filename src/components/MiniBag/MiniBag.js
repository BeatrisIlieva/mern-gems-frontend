import { NonEmptyMiniBag } from "./NonEmptyMiniBag/NonEmptyMiniBag";
import { EmptyMiniBag } from "./EmptyMiniBag/EmptyMiniBag";
import { Popup } from "./Popup/Popup";

import { useBagContext } from "../../contexts/BagContext";

export const MiniBag = ({ toggleDisplayMiniBagPopup }) => {
  const { bagTotalQuantity } = useBagContext();

  return (
    <Popup popupCloseHandler={toggleDisplayMiniBagPopup}>
      {bagTotalQuantity > 0 ? (
        <NonEmptyMiniBag
          toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup}
        />
      ) : (
        <EmptyMiniBag />
      )}
    </Popup>
  );
};
