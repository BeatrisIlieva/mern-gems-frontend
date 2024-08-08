export const getData = (values) => {
  const firstName = values.firstName.fieldValue;
  const lastName = values.lastName.fieldValue;
  const phoneNumber = values.phoneNumber.fieldValue;
  const country = values.country.fieldValue;
  const city = values.city.fieldValue;
  const street = values.street.fieldValue;
  const apartment = values.apartment.fieldValue;
  const zipCode = values.zipCode.fieldValue;

  const data = {
    firstName,
    lastName,
    phoneNumber,
    country,
    city,
    street,
    apartment,
    zipCode,
  };

  return data;
};
