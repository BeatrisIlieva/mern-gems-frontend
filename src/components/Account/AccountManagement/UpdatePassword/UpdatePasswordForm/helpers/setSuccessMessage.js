import { SUCCESS_MESSAGES } from "../../../../../../mappers/successMessages";

export const setSuccessMessage = (spreadValues, FORM_KEYS) => {
  spreadValues[FORM_KEYS.NewPassword].successMessage =
    SUCCESS_MESSAGES.newPassword;

  return spreadValues;
};
