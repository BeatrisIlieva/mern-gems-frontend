import { useEffect } from "react";

import { useAuthContext } from "../../../../../contexts/AuthContext";

import { DynamicForm } from "../../../../DynamicForm/DynamicForm";

import { useForm } from "../../../../../hooks/useForm";

import { hasFormErrorOccurred } from "../../../../../utils/hasFormErrorOccurred";

import { INVALID_CREDENTIALS_ERROR_MESSAGE } from "../../../../../constants/email";
import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

import { login } from "../../../../../services/authService";

const ButtonTitle = "Sign In";

export const LoginForm = () => {
  const { updateAuth } = useAuthContext();

  let {
    values,
    setValues,
    updateForm,
    clickHandler,
    blurHandler,
    changeHandler,
    submitHandler,
  } = useForm(INITIAL_FORM_VALUES);

  useEffect(() => {
    updateForm();
  }, []);

  const onSubmit = async (e) => {
    submitHandler(e);

    const updatedValues = { ...values };
    setValues(updatedValues);

    updateForm();

    const errorOccurred = hasFormErrorOccurred(values);

    if (!errorOccurred) {
      const email = values.email.fieldValue;
      const password = values.password.fieldValue;

      const data = { email, password };

      try {
        const result = await login(data);

        await updateAuth(result);
      } catch (err) {
        if (err.message === INVALID_CREDENTIALS_ERROR_MESSAGE) {
          setValues((prevValues) => ({
            ...prevValues,
            [FORM_KEYS.Email]: {
              ...prevValues[FORM_KEYS.Email],
              errorMessage: err.message,
            },
          }));

          updateForm();
        }
      }
    }
  };

  return (
    <section>
      <form method="POST" onSubmit={onSubmit}>
        <DynamicForm
          values={values}
          formKeys={FORM_KEYS}
          clickHandler={clickHandler}
          blurHandler={blurHandler}
          changeHandler={changeHandler}
          initialFormValues={INITIAL_FORM_VALUES}
          buttonTitle={ButtonTitle}
        />
      </form>
    </section>
  );
};
