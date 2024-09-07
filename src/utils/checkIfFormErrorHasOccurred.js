export const checkIfFormErrorHasOccurred = (formValues) => {
  return Object.values(formValues).some((field) => field.errorMessage !== "");
};
