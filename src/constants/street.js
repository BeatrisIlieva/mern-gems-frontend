const STREET_LENGTH = {
  MIN: 8,
  MAX: 255,
};

// export const STREET_PATTERN = new RegExp(
//   `^[a-zA-Z0-9 ]{${STREET_LENGTH.MIN},${STREET_LENGTH.MAX}}$`
// );

export const STREET_PATTERN = new RegExp(
  `^[\\p{L}\\p{N} ]{${STREET_LENGTH.MIN},${STREET_LENGTH.MAX}}$`,
  "u"
);

export const STREET_ERROR_MESSAGE = {
  English: `* This field requires ${STREET_LENGTH.MIN}-${STREET_LENGTH.MAX} characters`,
  Chinese: `* 该字段需要 ${STREET_LENGTH.MIN}-${STREET_LENGTH.MAX} 个字符`,
  Bulgarian: `* Полето трябва да съдържа ${STREET_LENGTH.MIN}-${STREET_LENGTH.MAX} знака`,
};
