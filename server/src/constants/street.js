const STREET_LENGTH = {
  MIN: 8,
  MAX: 255,
};

module.exports.STREET_PATTERN = new RegExp(
  `^[\\p{L}\\p{N} ]{${STREET_LENGTH.MIN},${STREET_LENGTH.MAX}}$`,
  "u"
);

module.exports.STREET_ERROR_MESSAGE = `This field requires ${STREET_LENGTH.MIN}-${STREET_LENGTH.MAX} characters`;
