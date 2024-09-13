const APARTMENT_LENGTH = {
  MIN: 0,
  MAX: 10,
};

module.exports.APARTMENT_PATTERN = new RegExp(
  `^[\\p{L}\\p{N} ]{${APARTMENT_LENGTH.MIN},${APARTMENT_LENGTH.MAX}}$`,
  "u"
);

module.exports.APARTMENT_ERROR_MESSAGE = `* This field requires ${APARTMENT_LENGTH.MIN}-${APARTMENT_LENGTH.MAX} characters`;
