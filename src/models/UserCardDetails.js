const mongoose = require("mongoose");
const { NAME_PATTERN, NAME_ERROR_MESSAGE } = require("../constants/name");
const { PHONE_PATTERN, PHONE_ERROR_MESSAGE } = require("../constants/phone");
const { STREET_PATTERN, STREET_ERROR_MESSAGE } = require("../constants/street");
const {
  APARTMENT_PATTERN,
  APARTMENT_ERROR_MESSAGE,
} = require("../constants/apartment");
const {
  ZIP_CODE_PATTERN,
  ZIP_CODE_ERROR_MESSAGE,
} = require("../constants/zipCode");

const userCardDetailsSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  longCardNumber: {
    type: String,
    match: [NAME_PATTERN, NAME_ERROR_MESSAGE],
  },
  lastName: {
    type: String,
    match: [NAME_PATTERN, NAME_ERROR_MESSAGE],
  },
  phoneNumber: {
    type: String,
    match: [PHONE_PATTERN, PHONE_ERROR_MESSAGE],
  },
  country: {
    type: String,
    match: [NAME_PATTERN, NAME_ERROR_MESSAGE],
  },
  city: {
    type: String,
    match: [NAME_PATTERN, NAME_ERROR_MESSAGE],
  },
  street: {
    type: String,
    match: [STREET_PATTERN, STREET_ERROR_MESSAGE],
  },
  apartment: {
    type: String,
    match: [APARTMENT_PATTERN, APARTMENT_ERROR_MESSAGE],
  },
  zipCode: {
    type: String,
    match: [ZIP_CODE_PATTERN, ZIP_CODE_ERROR_MESSAGE],
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
