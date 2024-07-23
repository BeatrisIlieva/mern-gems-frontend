import { EMAIL_PATTERN } from "../../../constants/email";
import { PASSWORD_PATTERN } from "../../../constants/password";

const FORM_KEYS = {
  Email: "email",
  RetypeEmail: "retypeEmail",
  Password: "password",
  RetypePassword: "retypePassword",
};

export const INITIAL_FORM_VALUES = {
  [FORM_KEYS.Email]: {
    fieldLabel: "Email Address",
    fieldValue: "",
    regexPattern: EMAIL_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "email",
    validTestData: "test@email.com",
    invalidTestData: "t@e.c",
    emptyTestData: "",
    differentPasswordsTestData: "test@email.com",
    differentEmailsTestData: "test@email.com",
  },

  [FORM_KEYS.RetypeEmail]: {
    fieldLabel: "Retype Email Address",
    fieldValue: "",
    regexPattern: EMAIL_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "email",
    validTestData: "test@email.com",
    invalidTestData: "t@e.c",
    emptyTestData: "",
    differentPasswordsTestData: "test@email.com",
    differentEmailsTestData: "test1@email.com",
  },

  [FORM_KEYS.Password]: {
    fieldLabel: "Password",
    fieldValue: "",
    regexPattern: PASSWORD_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "password",
    validTestData: "123456Tt",
    invalidTestData: "12345678",
    emptyTestData: "",
    differentPasswordsTestData: "123456Tt",
    differentEmailsTestData: "123456Tt",
  },

  [FORM_KEYS.RetypePassword]: {
    fieldLabel: "Retype Password",
    fieldValue: "",
    regexPattern: PASSWORD_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "password",
    validTestData: "123456Tt",
    invalidTestData: "12345678",
    emptyTestData: "",
    differentPasswordsTestData: "123456Ty",
    differentEmailsTestData: "123456Tt",
  },
};

export { FORM_KEYS };
