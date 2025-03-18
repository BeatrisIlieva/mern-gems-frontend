const ZIP_CODE_LENGTH = {
  MIN: 4,
  MAX: 15,
};

export const ZIP_CODE_PATTERN = new RegExp(
  `^[\\p{L}\\p{N} ]{${ZIP_CODE_LENGTH.MIN},${ZIP_CODE_LENGTH.MAX}}$`,
  "u"
);

export const ZIP_CODE_ERROR_MESSAGE = {
  English: `* This field requires ${ZIP_CODE_LENGTH.MIN}-${ZIP_CODE_LENGTH.MAX} characters`,
  Chinese: `* 该字段需要 ${ZIP_CODE_LENGTH.MIN}-${ZIP_CODE_LENGTH.MAX} 个字符`,
  Bulgarian: `* Полето трябва да съдържа ${ZIP_CODE_LENGTH.MIN}-${ZIP_CODE_LENGTH.MAX} знака`,
};
