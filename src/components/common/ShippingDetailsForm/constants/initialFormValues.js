import { PHONE_PATTERN } from "../../../../constants/phone";
import { ZIP_CODE_PATTERN } from "../../../../constants/zipCode";
import { NAME_PATTERN } from "../../../../constants/name";
import { STREET_PATTERN } from "../../../../constants/street";
import { APARTMENT_PATTERN } from "../../../../constants/apartment";

const FORM_KEYS = {
  FirstName: "firstName",
  LastName: "lastName",
  PhoneNumber: "phoneNumber",
  Country: "country",
  City: "city",
  Street: "street",
  Apartment: "apartment",
  ZipCode: "zipCode",
};

export const INITIAL_FORM_VALUES = {
  [FORM_KEYS.FirstName]: {
    fieldLabel: {
      English: "First Name *",
      Chinese: "名字 *",
      Bulgarian: "Собствено Име *",
    },
    fieldValue: "",
    regexPattern: NAME_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "text",
    validTestData: "Test",
    invalidTestData: "Test1",
    emptyTestData: "",
  },

  [FORM_KEYS.LastName]: {
    fieldLabel: {
      English: "Last Name *",
      Chinese: "姓 *",
      Bulgarian: "Фамилно Име *",
    },
    fieldValue: "",
    regexPattern: NAME_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "text",
    validTestData: "Test",
    invalidTestData: "Test1",
    emptyTestData: "",
  },

  [FORM_KEYS.PhoneNumber]: {
    fieldLabel: {
      English: "Phone Number *",
      Chinese: "电话号码 *",
      Bulgarian: "Телефон за връзка *",
    },
    fieldValue: "",
    regexPattern: PHONE_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "text",
    validTestData: "0123456789",
    invalidTestData: "T01234",
    emptyTestData: "",
  },

  [FORM_KEYS.Country]: {
    fieldLabel: {
      English: "Country *",
      Chinese: "国家 *",
      Bulgarian: "Държава *",
    },
    fieldValue: "",
    regexPattern: NAME_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "text",
    validTestData: "Test",
    invalidTestData: "1Test",
    emptyTestData: "",
  },

  [FORM_KEYS.City]: {
    fieldLabel: { English: "City *", Chinese: "城市 *", Bulgarian: "Град *" },
    fieldValue: "",
    regexPattern: NAME_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "text",
    validTestData: "Test",
    invalidTestData: "1Test",
    emptyTestData: "",
  },

  [FORM_KEYS.Street]: {
    fieldLabel: {
      English: "Street *",
      Chinese: "街道 *",
      Bulgarian: "Улица *",
    },
    fieldValue: "",
    regexPattern: STREET_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "text",
    validTestData: "Test Test 10",
    invalidTestData: "T",
    emptyTestData: "",
  },

  [FORM_KEYS.Apartment]: {
    fieldLabel: {
      English: "Apartment/Suite",
      Chinese: "号公寓",
      Bulgarian: "Apartment",
    },
    fieldValue: "",
    regexPattern: APARTMENT_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "text",
    validTestData: "A1",
    invalidTestData: "$",
    emptyTestData: "",
  },

  [FORM_KEYS.ZipCode]: {
    fieldLabel: "Zip Code *",
    fieldValue: "",
    regexPattern: ZIP_CODE_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "text",
    validTestData: "Test1",
    invalidTestData: "$",
    emptyTestData: "",
  },
};

export { FORM_KEYS };
