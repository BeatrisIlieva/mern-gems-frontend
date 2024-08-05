export const clearInitialFormValuesMessages = (
  FORM_KEYS,
  INITIAL_FORM_VALUES
) => {
  Object.keys(FORM_KEYS).forEach((key) => {
    INITIAL_FORM_VALUES[FORM_KEYS[key]].errorMessage = "";
  });
};
