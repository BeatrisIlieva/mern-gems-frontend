import { useBagContext } from "../../contexts/BagContext";

import { NonEmptyMiniBag } from "./NonEmptyMiniBag/NonEmptyMiniBag";

import { EmptyMiniBag } from "./EmptyMiniBag/EmptyMiniBag";
import { Popup } from "../Popup/Popup";

export const MiniBag = ({ toggleDisplayMiniBagPopup }) => {
  const { bagTotalQuantityIntoState } = useBagContext();

  return (
    <Popup
      overlayVariant={"overlay-right"}
      modalVariant={"mini-bag"}
      popupCloseHandler={toggleDisplayMiniBagPopup}
    >
      {bagTotalQuantityIntoState > 0 ? (
        <NonEmptyMiniBag
          toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup}
        />
      ) : (
        <EmptyMiniBag />
      )}
    </Popup>
  );
};
