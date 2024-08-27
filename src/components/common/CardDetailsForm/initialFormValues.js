import { LONG_CARD_NUMBER_PATTERN } from "../../../constants/cardNumber";
import { CARD_HOLDER_NAME_PATTERN } from "../../../constants/cardHolder";
import { CVV_CODE_PATTERN } from "../../../constants/cVVCode";
import { EXPIRY_DATE_PATTERN } from "../../../constants/expiryDate";

const FORM_KEYS = {
  CardHolder: "cardHolder",
  LongCardNumber: "longCardNumber",
  CvvCode: "cVVCode",
  ExpiryDate: "expiryDate",
};

export const INITIAL_FORM_VALUES = {
  [FORM_KEYS.CardHolder]: {
    fieldLabel: "Name On Card *",
    fieldValue: "",
    regexPattern: CARD_HOLDER_NAME_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "text",
    validTestData: "Test",
    invalidTestData: "Test1",
    emptyTestData: "",
  },

  [FORM_KEYS.LongCardNumber]: {
    fieldLabel: "Card Number *",
    fieldValue: "",
    regexPattern: LONG_CARD_NUMBER_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "text",
    validTestData: "0123456789123456",
    invalidTestData: "012345678912345T",
    emptyTestData: "",
  },

  [FORM_KEYS.CvvCode]: {
    fieldLabel: "CVV *",
    fieldValue: "",
    regexPattern: CVV_CODE_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "text",
    validTestData: "123",
    invalidTestData: "12T",
    emptyTestData: "",
  },

  [FORM_KEYS.ExpiryDate]: {
    fieldLabel: "Expiry Date MM/YY *",
    fieldValue: "",
    regexPattern: EXPIRY_DATE_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "text",
    validTestData: "11/30",
    invalidTestData: "11/20",
    emptyTestData: "",
  },
};

export { FORM_KEYS };
