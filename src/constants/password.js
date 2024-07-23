const PASSWORD_LENGTH = {
  MIN: 8,
  MAX: 255,
};

export const PASSWORD_PATTERN = new RegExp(
  `^(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[0-9]{1})[A-Za-z0-9]{${PASSWORD_LENGTH.MIN},${PASSWORD_LENGTH.MAX}}$`
);

export const PASSWORD_ERROR_MESSAGE = `* Password must be ${PASSWORD_LENGTH.MIN}-${PASSWORD_LENGTH.MAX} characters and include at least one lowercase letter, one uppercase letter, and one digit`;

export const PASSWORD_MISMATCH_ERROR_MESSAGE =
  "* Ensure that both password fields contain the same password";

export const PASSWORD_SUCCESS_MESSAGE =
  "Your password has been changed successfully";
