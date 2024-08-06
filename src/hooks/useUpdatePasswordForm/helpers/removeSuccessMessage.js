export const removeSuccessMessage = (spreadValues, FORM_KEYS) => {
  spreadValues[FORM_KEYS.NewPassword].successMessage = "";

  return spreadValues;
};
