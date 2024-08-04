const mongoose = require("mongoose");

const {
  CARD_HOLDER_NAME_PATTERN,
  CARD_HOLDER_NAME_PATTERN_ERROR_MESSAGE,
} = require("../constants/cardHolder");

const {
  LONG_CARD_NUMBER_PATTERN,
  LONG_CARD_NUMBER_PATTERN_ERROR_MESSAGE,
} = require("../constants/cardNumber");

const {
  CVV_CODE_PATTERN,
  CVV_CODE_PATTERN_ERROR_MESSAGE,
} = require("../constants/cVVCode");

const {
  EXPIRY_DATE_PATTERN,
  EXPIRY_DATE_PATTERN_ERROR_MESSAGE,
  CARD_HAS_EXPIRED_ERROR_MESSAGE,
} = require("../constants/expiryDate");

const userCardDetailsSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  cardHolder: {
    type: String,
    match: [CARD_HOLDER_NAME_PATTERN, CARD_HOLDER_NAME_PATTERN_ERROR_MESSAGE],
  },

  longCardNumber: {
    type: String,
    match: [LONG_CARD_NUMBER_PATTERN, LONG_CARD_NUMBER_PATTERN_ERROR_MESSAGE],
  },

  cVVCode: {
    type: String,
    match: [CVV_CODE_PATTERN, CVV_CODE_PATTERN_ERROR_MESSAGE],
  },
  expiryDate: {
    type: String,
    match: [
      EXPIRY_DATE_PATTERN,
      EXPIRY_DATE_PATTERN_ERROR_MESSAGE,
      CARD_HAS_EXPIRED_ERROR_MESSAGE,
    ],
  },
});

userCardDetailsSchema.pre("save", async function () {
  this._id = this._id;
});

const UserCardDetails = mongoose.model(
  "UserCardDetails",
  userCardDetailsSchema
);

module.exports = UserCardDetails;
