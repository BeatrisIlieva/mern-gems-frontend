const APARTMENT_LENGTH = {
  MIN: 0,
  MAX: 10,
};

export const APARTMENT_PATTERN = new RegExp(
  `^[a-zA-Z0-9]{${APARTMENT_LENGTH.MIN},${APARTMENT_LENGTH.MAX}}$`
);
export const APARTMENT_ERROR_MESSAGE = `* This field requires ${APARTMENT_LENGTH.MIN}-${APARTMENT_LENGTH.MAX} characters`;
