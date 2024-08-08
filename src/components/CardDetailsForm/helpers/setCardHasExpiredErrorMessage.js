import { CARD_HAS_EXPIRED_ERROR_MESSAGE } from "../../../constants/expiryDate";

export const setCardHasExpiredErrorMessage = (spreadValues, FORM_KEYS) => {
  spreadValues[FORM_KEYS.ExpiryDate].errorMessage =
    CARD_HAS_EXPIRED_ERROR_MESSAGE;

  return spreadValues;
};
