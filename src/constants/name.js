const NAME_LENGTH = {
  MIN: 2,
  MAX: 255,
};

export const NAME_PATTERN = new RegExp(
  `^(?!.*--)(?!.*  )[\\p{L}]+(?:[ -][\\p{L}]+)*$`,
  "u"
);

export const NAME_ERROR_MESSAGE = {
  English: `* This field requires ${NAME_LENGTH.MIN}-${NAME_LENGTH.MAX} letters`,
  Chinese: `* 该字段要求 ${NAME_LENGTH.MIN}-${NAME_LENGTH.MAX} 个字母`,
  Bulgarian: `* Полето трябва да съдържа ${NAME_LENGTH.MIN}-${NAME_LENGTH.MAX} букви`,
};
