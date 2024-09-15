import { LONG_CARD_NUMBER_PATTERN } from "../../../../constants/cardNumber";
import { NAME_PATTERN } from "../../../../constants/name";
import { CVV_CODE_PATTERN } from "../../../../constants/cVVCode";
import { EXPIRY_DATE_PATTERN } from "../../../../constants/expiryDate";

const FORM_KEYS = {
  LongCardNumber: "longCardNumber",
  CardHolder: "cardHolder",
  CvvCode: "cVVCode",
  ExpiryDate: "expiryDate",
};

export const INITIAL_FORM_VALUES = {
  [FORM_KEYS.LongCardNumber]: {
    fieldLabel: {
      English: "Card Number *",
      Chinese: "卡号 *",
      Bulgarian: "Номер на картата *",
    },
    fieldValue: "",
    regexPattern: LONG_CARD_NUMBER_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "text",
    validTestData: "0123456789123456",
    invalidTestData: "012345678912345T",
    emptyTestData: "",
    expiredTestData: "0123456789123456",
  },

  [FORM_KEYS.CardHolder]: {
    fieldLabel: {
      English: "Name On Card *",
      Chinese: "持卡人姓名 *",
      Bulgarian: "Картодържател *",
    },
    fieldValue: "",
    regexPattern: NAME_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "text",
    validTestData: "Test",
    invalidTestData: "Test1",
    emptyTestData: "",
    expiredTestData: "Test",
  },

  [FORM_KEYS.CvvCode]: {
    fieldLabel: {
      English: "CVV *",
      Chinese: "CVV码 *",
      Bulgarian: "Код за сигурност *",
    },
    fieldValue: "",
    regexPattern: CVV_CODE_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "text",
    validTestData: "123",
    invalidTestData: "12T",
    emptyTestData: "",
    expiredTestData: "123",
  },

  [FORM_KEYS.ExpiryDate]: {
    fieldLabel: {
      English: "MM/YY *",
      Chinese: "月/年 *",
      Bulgarian: "ММ/ГГ *",
    },
    fieldValue: "",
    regexPattern: EXPIRY_DATE_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "text",
    validTestData: "11/30",
    invalidTestData: "1130",
    emptyTestData: "",
    expiredTestData: "11/20",
  },
};

export { FORM_KEYS };
