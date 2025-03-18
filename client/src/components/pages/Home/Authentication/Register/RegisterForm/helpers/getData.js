export const getData = (values) => {
  const email = values.email.fieldValue;
  const password = values.password.fieldValue;

  const data = { email, password };

  return data;
};
