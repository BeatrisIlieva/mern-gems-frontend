exports.verifyCardDetails = (
  longCardNumber,
  cardHolder,
  cvvCode,
  expiryDate
) => {

  const sixteenDigitsPattern = /^\d{16}$/;
  const cvvPattern = /^\d{3}$/;
  const expiryDatePattern = /^\d{2}\/\d{2}$/;
  const cardHolderNamePattern = /^[a-zA-Z\s'-]{2,50}$/;

  if (!sixteenDigitsPattern.test(longCardNumber)) {
    throw new Error("The card number should be exactly 16 digits long.");
  } else if (!cvvPattern.test(cvvCode)) {
    throw new Error("The CVV code should be exactly 3 digits long.");
  } else if (!expiryDatePattern.test(expiryDate)) {
    throw new Error("The expiration date should be in the format MM/YY.");
  } else if (isCardExpired(expiryDate)) {
    throw new Error("This card has expired.");
  } else if (!cardHolderNamePattern.test(cardHolder)) {
    throw new Error("Ensure you enter a valid name");
  }
};

function isCardExpired(expirationDate) {
  const [month, year] = expirationDate
    .split("/")
    .map((val) => parseInt(val, 10));
  const expiration = new Date("20" + year + "-" + month + "-01");

  const currentDate = new Date();

  if (expiration < currentDate) {
    return true;
  } else {
    return false;
  }
}
