import { INVALID_CREDENTIALS_ERROR_MESSAGE } from "../../../../../../../constants/email";

export const setInvalidCredentialsErrorMessage = (spreadValues, FORM_KEYS) => {
  spreadValues[FORM_KEYS.Email].errorMessage =
    INVALID_CREDENTIALS_ERROR_MESSAGE;

  return spreadValues;
};
