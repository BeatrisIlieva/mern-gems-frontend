import { useService } from "../../hooks/useService";

import { bagServiceFactory } from "../../services/bagService";

import { Popup } from "../Popup/Popup";

export const Bag = ({ toggleDisplayBagPopup }) => {
  const bagService = useService(bagServiceFactory);

  return (
    <Popup
      isVisible
      variant={"order"}
      popupCloseHandler={toggleDisplayBagPopup}
    >
      <h1>Bag</h1>
    </Popup>
  );
};
