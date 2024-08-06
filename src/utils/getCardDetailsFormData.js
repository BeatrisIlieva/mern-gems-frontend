export const getCardDetailsFormData = (values) => {
  const longCardNumber = values.longCardNumber.fieldValue;
  const cardHolder = values.cardHolder.fieldValue;
  const cVVCode = values.cVVCode.fieldValue;
  const expiryDate = values.expiryDate.fieldValue;

  const data = {
    longCardNumber,
    cardHolder,
    cVVCode,
    expiryDate,
  };

  return data;
};
