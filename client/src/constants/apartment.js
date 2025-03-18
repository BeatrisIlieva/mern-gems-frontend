const APARTMENT_LENGTH = {
  MIN: 0,
  MAX: 10,
};

export const APARTMENT_PATTERN = new RegExp(
  `^[\\p{L}\\p{N} ]{${APARTMENT_LENGTH.MIN},${APARTMENT_LENGTH.MAX}}$`,
  "u"
);

export const APARTMENT_ERROR_MESSAGE = {
  English: `* This field requires ${APARTMENT_LENGTH.MIN}-${APARTMENT_LENGTH.MAX} characters`,
  Chinese: `* 该字段要求 ${APARTMENT_LENGTH.MIN}-${APARTMENT_LENGTH.MAX} 个字母`,
  Bulgarian: `* Полето трябва да съдържа ${APARTMENT_LENGTH.MIN}-${APARTMENT_LENGTH.MAX} знака`,
};
