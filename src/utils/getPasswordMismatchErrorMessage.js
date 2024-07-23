import { ERROR_MESSAGES } from "../mappers/errorMessages";

export const getPasswordMismatchErrorMessage = (password, retypePassword) => {
  if (password !== retypePassword) {
    return ERROR_MESSAGES.passwordMismatch;
  } else {
    return "";
  }
};
