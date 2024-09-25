import { memo } from "react";

import { MiniBagContent } from "../MiniBagContent/MiniBagContent";
import { Popup } from "../../reusable/Popup/Popup";

export const MiniBag = memo(
  ({ toggleDisplayMiniBagPopup, displayPopup, movePopup }) => {
    return (
      <Popup
        toggleDisplayPopup={toggleDisplayMiniBagPopup}
        displayPopup={displayPopup}
        overlayVariant={"right"}
        modalVariant={"right"}
        movePopup={movePopup}
      >
        <MiniBagContent toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup} />
      </Popup>
    );
  }
);
