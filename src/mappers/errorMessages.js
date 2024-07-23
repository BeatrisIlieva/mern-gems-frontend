import { PASSWORD_ERROR_MESSAGE } from "../constants/password";
import { PASSWORD_MISMATCH_ERROR_MESSAGE } from "../constants/password";
import { EMAIL_ERROR_MESSAGE } from "../constants/email";
import { NAME_ERROR_MESSAGE } from "../constants/name";
import { PHONE_ERROR_MESSAGE } from "../constants/phone";
import { STREET_ERROR_MESSAGE } from "../constants/street";
import { ZIP_CODE_ERROR_MESSAGE } from "../constants/zipCode";
import { APARTMENT_ERROR_MESSAGE } from "../constants/apartment";
import { LONG_CARD_NUMBER_PATTERN_ERROR_MESSAGE } from "../constants/cardNumber";
import { CVV_CODE_PATTERN_ERROR_MESSAGE } from "../constants/cVVCode";
import { CARD_HOLDER_NAME_PATTERN_ERROR_MESSAGE } from "../constants/cardHolder";

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
  cvvCode: CVV_CODE_PATTERN_ERROR_MESSAGE,
  cardHolder: CARD_HOLDER_NAME_PATTERN_ERROR_MESSAGE,
};
