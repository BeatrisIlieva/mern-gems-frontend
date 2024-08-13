import { NonEmptyMiniBag } from "./NonEmptyMiniBag/NonEmptyMiniBag";
import { EmptyMiniBag } from "./EmptyMiniBag/EmptyMiniBag";
// import { Popup } from "./Popup/Popup";

import {Popup} from "../../../reusable/Popup/Popup"

import { useBagContext } from "../../../../contexts/BagContext";

export const MiniBag = ({ toggleDisplayMiniBagPopup }) => {
  const { bagTotalQuantity } = useBagContext();

  return (
    <Popup popupCloseHandler={toggleDisplayMiniBagPopup} variant={"mini-bag"} overlayVariant={"mini-bag"}>
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
