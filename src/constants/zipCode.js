const ZIP_CODE_LENGTH = {
  MIN: 4,
  MAX: 15,
};

module.exports.ZIP_CODE_PATTERN = new RegExp(
  `^[\\p{L}\\p{N} ]{${ZIP_CODE_LENGTH.MIN},${ZIP_CODE_LENGTH.MAX}}$`,
  "u"
);

module.exports.ZIP_CODE_ERROR_MESSAGE = `This field requires ${ZIP_CODE_LENGTH.MIN}-${ZIP_CODE_LENGTH.MAX} characters`; 
