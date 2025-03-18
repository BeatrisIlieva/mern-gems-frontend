const PASSWORD_LENGTH = {
  MIN: 8,
  MAX: 255,
};

export const PASSWORD_PATTERN = new RegExp(
  `^(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[0-9]{1})[A-Za-z0-9]{${PASSWORD_LENGTH.MIN},${PASSWORD_LENGTH.MAX}}$`
);

export const PASSWORD_ERROR_MESSAGE = {
  English: "* Please enter a valid password",
  Chinese: "* 请输入有效的密码",
  Bulgarian: "* Моля, въведете валидна парола",
};

export const PASSWORD_REQUIREMENTS = {
  English: `* Password must be between ${PASSWORD_LENGTH.MIN} and ${PASSWORD_LENGTH.MAX} English letters and include at least one lowercase letter, one uppercase letter, and one digit`,
  Chinese: `密码必须是 ${PASSWORD_LENGTH.MIN} 到 ${PASSWORD_LENGTH.MAX} 个英文字母，并包含至少一个小写字母、一个大写字母和一个数字`,
  Bulgarian: `* Паролата трябва да съдържа между ${PASSWORD_LENGTH.MIN} и ${PASSWORD_LENGTH.MAX} английски букви, поне една малка буква, една главна буква и едно число`,
};

export const PASSWORD_MISMATCH_ERROR_MESSAGE = {
  English: "* Ensure that both password fields contain the same password",
  Chinese: "* 请确保两个密码字段中的密码相同",
  Bulgarian: "* Уверете се, че двете полета съдържат еднакви пароли",
};
