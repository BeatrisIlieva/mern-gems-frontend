const NAME_LENGTH = {
  MIN: 2,
  MAX: 255,
};

module.exports.NAME_PATTERN = new RegExp(
  `^(?!.*--)(?!.*  )[\\p{L}]+(?:[ -][\\p{L}]+)*$`,
  "u"
);

module.exports.NAME_ERROR_MESSAGE = `This field requires ${NAME_LENGTH.MIN}-${NAME_LENGTH.MAX} letters`;
