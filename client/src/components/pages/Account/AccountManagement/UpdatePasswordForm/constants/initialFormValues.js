import { PASSWORD_PATTERN } from "../../../../../../constants/password";

const FORM_KEYS = {
  Password: "password",
  NewPassword: "newPassword",
  RetypeNewPassword: "retypeNewPassword",
};

export const INITIAL_FORM_VALUES = {
  [FORM_KEYS.Password]: {
    fieldLabel: {
      English: "Current Password *",
      Chinese: "当前密码 *",
      Bulgarian: "Текуща Парола *",
    },
    fieldValue: "",
    regexPattern: PASSWORD_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "password",
    validTestData: "123456Tt",
    invalidTestData: "12345678",
    emptyTestData: "",
    differentPasswordsTestData: "123456Tt",
  },

  [FORM_KEYS.NewPassword]: {
    fieldLabel: {
      English: "New Password *",
      Chinese: "新密码 *",
      Bulgarian: "Нова Парола *",
    },
    fieldValue: "",
    regexPattern: PASSWORD_PATTERN,
    errorMessage: "",
    successMessage: "",
    isFocused: false,
    fieldType: "password",
    validTestData: "123456Tt",
    invalidTestData: "12345678",
    emptyTestData: "",
    differentPasswordsTestData: "123456Tt",
  },

  [FORM_KEYS.RetypeNewPassword]: {
    fieldLabel: {
      English: "Confirm Password *",
      Chinese: "确认密码 *",
      Bulgarian: "Потвърди Парола *",
    },
    fieldValue: "",
    regexPattern: PASSWORD_PATTERN,
    errorMessage: "",
    isFocused: false,
    fieldType: "password",
    validTestData: "123456Tt",
    invalidTestData: "12345678",
    emptyTestData: "",
    differentPasswordsTestData: "123456Ty",
  },
};

export { FORM_KEYS };
