export const EMAIL_PATTERN =
  /^[A-Za-z0-9\u4e00-\u9fff._%+-]+@[A-Za-z0-9\u4e00-\u9fff.-]+\.[A-Za-z\u4e00-\u9fff]{2,4}$/u;

export const EMAIL_ERROR_MESSAGE = "* Ensure you enter a valid email address";

export const EMAIL_ALREADY_EXISTS_ERROR_MESSAGE =
  "This email address is already registered";

export const INVALID_CREDENTIALS_ERROR_MESSAGE =
  "We couldn't find an account matching the email and password you entered";
