import { EMAIL_ALREADY_EXISTS_ERROR_MESSAGE } from "../../../../../../../constants/email";

export const setEmailAlreadyExistsErrorMessage = (spreadValues, FORM_KEYS) => {
  spreadValues[FORM_KEYS.Email].errorMessage =
    EMAIL_ALREADY_EXISTS_ERROR_MESSAGE;

  return spreadValues;
};
