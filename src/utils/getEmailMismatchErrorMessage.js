import { ERROR_MESSAGES } from "../mappers/errorMessages";

export const getEmailMismatchErrorMessage = (email, retypeEmail) => {
  if (email !== retypeEmail) {
    return ERROR_MESSAGES.emailMismatch;
  } else {
    return "";
  }
};
