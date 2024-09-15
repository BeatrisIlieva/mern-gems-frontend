import { PASSWORD_ERROR_MESSAGE } from "./password";
import { PASSWORD_MISMATCH_ERROR_MESSAGE } from "./password";
import { EMAIL_ERROR_MESSAGE } from "./email";
import { NAME_ERROR_MESSAGE } from "./name";
import { PHONE_ERROR_MESSAGE } from "./phone";
import { STREET_ERROR_MESSAGE } from "./street";
import { ZIP_CODE_ERROR_MESSAGE } from "./zipCode";
import { APARTMENT_ERROR_MESSAGE } from "./apartment";
import { LONG_CARD_NUMBER_PATTERN_ERROR_MESSAGE } from "./cardNumber";
import { CVV_CODE_PATTERN_ERROR_MESSAGE } from "./cVVCode";
import { EXPIRY_DATE_PATTERN_ERROR_MESSAGE } from "./expiryDate";

export const ERROR_MESSAGES = {
  password: PASSWORD_ERROR_MESSAGE,
  newPassword: PASSWORD_ERROR_MESSAGE,
  retypeNewPassword: PASSWORD_ERROR_MESSAGE,
  retypePassword: PASSWORD_ERROR_MESSAGE,
  passwordMismatch: PASSWORD_MISMATCH_ERROR_MESSAGE,
  email: EMAIL_ERROR_MESSAGE,
  retypeEmail: EMAIL_ERROR_MESSAGE,
  firstName: NAME_ERROR_MESSAGE,
  lastName: NAME_ERROR_MESSAGE,
  phoneNumber: PHONE_ERROR_MESSAGE,
  street: STREET_ERROR_MESSAGE,
  zipCode: ZIP_CODE_ERROR_MESSAGE,
  city: NAME_ERROR_MESSAGE,
  apartment: APARTMENT_ERROR_MESSAGE,
  country: NAME_ERROR_MESSAGE,
  longCardNumber: LONG_CARD_NUMBER_PATTERN_ERROR_MESSAGE,
  cVVCode: CVV_CODE_PATTERN_ERROR_MESSAGE,
  cardHolder: NAME_ERROR_MESSAGE,
  expiryDate: EXPIRY_DATE_PATTERN_ERROR_MESSAGE,
};
