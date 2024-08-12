export const getData = (values) => {
  const password = values.password.fieldValue;
  const newPassword = values.newPassword.fieldValue;

  const data = { password, newPassword };

  return data;
};
