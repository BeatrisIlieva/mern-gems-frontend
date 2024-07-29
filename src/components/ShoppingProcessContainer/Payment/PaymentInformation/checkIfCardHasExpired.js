export const isCardExpired = (expirationDate) => {
    console.log(expirationDate)
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
};
