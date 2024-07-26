import {
  PHONE_PATTERN,
  ZIP_CODE_PATTERN,
  NAME_PATTERN,
  STREET_PATTERN,
  APARTMENT_PATTERN,
} from "../../../../../constants/forms";

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
    fieldLabel: "First Name",
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
    fieldLabel: "Last Name",
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
    fieldLabel: "Phone Number *",
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
    fieldLabel: "Country *",
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
    fieldLabel: "City *",
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
    fieldLabel: "Street *",
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
    fieldLabel: "Apartment/Suite",
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
