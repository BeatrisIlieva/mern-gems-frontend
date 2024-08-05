import { getPasswordMismatchErrorMessage } from "../../../utils/getPasswordMismatchErrorMessage";

export const setErrorMessages = (values, updatedValues, FORM_KEYS) => {
  if (
    updatedValues[FORM_KEYS.NewPassword].errorMessage === "" ||
    updatedValues[FORM_KEYS.RetypeNewPassword].errorMessage === ""
  ) {
    const passwordErrorMessage = getPasswordMismatchErrorMessage(
      values[FORM_KEYS.NewPassword].fieldValue,
      values[FORM_KEYS.RetypeNewPassword].fieldValue
    );

    updatedValues[FORM_KEYS.NewPassword].errorMessage = passwordErrorMessage;
    updatedValues[FORM_KEYS.RetypeNewPassword].errorMessage =
      passwordErrorMessage;
  }

  return updatedValues;
};
