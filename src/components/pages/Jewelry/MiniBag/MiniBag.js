import { NonEmptyMiniBag } from "./NonEmptyMiniBag/NonEmptyMiniBag";
import { EmptyMiniBag } from "./EmptyMiniBag/EmptyMiniBag";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";
import { Popup } from "../../../reusable/Popup/Popup";

import { useBag } from "../../../../hooks/useBag";

export const MiniBag = ({ toggleDisplayMiniBagPopup }) => {
  const { bagItems } = useBag();

  return (
    <Popup
      popupCloseHandler={toggleDisplayMiniBagPopup}
      modalVariant={"mini-bag"}
      overlayVariant={"mini-bag"}
    >
      {bagItems.length > 0 ? (
        <NonEmptyMiniBag
          toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup}
        />
      ) : (
        <EmptyMiniBag toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup} />
      )}
    </Popup>
  );
};
