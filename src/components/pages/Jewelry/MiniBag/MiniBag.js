import { NonEmptyMiniBag } from "./NonEmptyMiniBag/NonEmptyMiniBag";
import { EmptyMiniBag } from "./EmptyMiniBag/EmptyMiniBag";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useBag } from "../../../../hooks/useBag";

export const MiniBag = ({ toggleDisplayMiniBagPopup }) => {
  const userId = useAuthenticationContext()
  const { bagTotalQuantity } = useBag({userId});

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
