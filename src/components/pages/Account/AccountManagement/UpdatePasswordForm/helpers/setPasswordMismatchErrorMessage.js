import { getPasswordMismatchErrorMessage } from "../../../../../../utils/getPasswordMismatchErrorMessage";

export const setPasswordMismatchErrorMessage = (
  values,
  spreadValues,
  FORM_KEYS
) => {
  if (
    spreadValues[FORM_KEYS.NewPassword].errorMessage === "" ||
    spreadValues[FORM_KEYS.RetypeNewPassword].errorMessage === ""
  ) {
    const passwordErrorMessage = getPasswordMismatchErrorMessage(
      values[FORM_KEYS.NewPassword].fieldValue,
      values[FORM_KEYS.RetypeNewPassword].fieldValue
    );

    spreadValues[FORM_KEYS.NewPassword].errorMessage = passwordErrorMessage;
    spreadValues[FORM_KEYS.RetypeNewPassword].errorMessage =
      passwordErrorMessage;
  }

  return spreadValues;
};
