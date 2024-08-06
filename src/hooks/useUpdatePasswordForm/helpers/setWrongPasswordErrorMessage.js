export const setWrongPasswordErrorMessage = (
  spreadValues,
  FORM_KEYS,
  errorMessage
) => {
  spreadValues[FORM_KEYS.Password].errorMessage = errorMessage;

  return spreadValues;
};
