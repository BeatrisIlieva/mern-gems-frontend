const PHONE_LENGTH = {
  MIN: 7,
  MAX: 15,
};

export const PHONE_PATTERN = new RegExp(
  `^[0-9]{${PHONE_LENGTH.MIN},${PHONE_LENGTH.MAX}}$`
);

export const PHONE_ERROR_MESSAGE = {
  English: `* This field requires ${PHONE_LENGTH.MIN}-${PHONE_LENGTH.MAX} digits`,
  Chinese: `* 该字段需要 ${PHONE_LENGTH.MIN}-${PHONE_LENGTH.MAX} 位数字`,
  Bulgarian: `* Полето трябва да съдържа ${PHONE_LENGTH.MIN}-${PHONE_LENGTH.MAX} цифри`,
};
