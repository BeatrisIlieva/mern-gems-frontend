import { memo } from "react";

import { MiniBagContent } from "../../../common/MiniBagContent/MiniBagContent";
import { Popup } from "../../../reusable/Popup/Popup";

export const MiniBag = memo(
  ({ toggleDisplayMiniBagPopup, displayPopup, movePopup, updateMovePopup }) => {
    return (
      <Popup
        toggleDisplayPopup={toggleDisplayMiniBagPopup}
        displayPopup={displayPopup}
        overlayVariant={"right"}
        modalVariant={"right"}
        movePopup={movePopup}
      >
        <MiniBagContent
          toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup}
          updateMovePopup={updateMovePopup}
        />
      </Popup>
    );
  }
);
