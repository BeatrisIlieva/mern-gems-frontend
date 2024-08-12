export const getData = (values) => {
  const newEmail = values.email.fieldValue;
  const password = values.password.fieldValue;

  const data = { email: newEmail, password };

  return data;
};
