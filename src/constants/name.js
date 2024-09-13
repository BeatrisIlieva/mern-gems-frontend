const NAME_LENGTH = {
  MIN: 2,
  MAX: 255,
};

// export const NAME_PATTERN = new RegExp(
//   `^[A-Za-z]{${NAME_LENGTH.MIN},${NAME_LENGTH.MAX}}$`
// );

export const NAME_PATTERN = new RegExp(
  `^(?!.*--)(?!.*  )[A-Za-z\\u0400-\\u04FF\\u4E00-\\u9FFF]+(?:[-][A-Za-z\\u0400-\\u04FF\\u4E00-\\u9FFF]+)*(?:[ ][A-Za-z\\u0400-\\u04FF\\u4E00-\\u9FFF]+)*(?:[-][A-Za-z\\u0400-\\u04FF\\u4E00-\\u9FFF]+)*(?:[ ][A-Za-z\\u0400-\\u04FF\\u4E00-\\u9FFF]+)*$`
);

export const NAME_ERROR_MESSAGE = {
  English: `* This field requires ${NAME_LENGTH.MIN}-${NAME_LENGTH.MAX} letters`,
  Chinese: `* 该字段要求 ${NAME_LENGTH.MIN}-${NAME_LENGTH.MAX} 个字母`,
  Bulgarian: `* Полето трябва да съдържа ${NAME_LENGTH.MIN}-${NAME_LENGTH.MAX} букви`,
};
