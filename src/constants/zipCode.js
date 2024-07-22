const ZIP_CODE_LENGTH = {
  MIN: 4,
  MAX: 15,
};

export const ZIP_CODE_PATTERN = new RegExp(
  `^[A-Za-z0-9 ]{${ZIP_CODE_LENGTH.MIN},${ZIP_CODE_LENGTH.MAX}}$`
);
export const ZIP_CODE_ERROR_MESSAGE = `* This field requires ${ZIP_CODE_LENGTH.MIN}-${ZIP_CODE_LENGTH.MAX} characters`;
