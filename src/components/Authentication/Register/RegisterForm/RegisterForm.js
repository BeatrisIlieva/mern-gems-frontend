import { useEffect } from "react";
// import { AuthContext } from "../../../../contexts/AuthContext";
// import { useContext } from "react";
import { getEmailMismatchErrorMessage } from "../../../../utils/getEmailMismatchErrorMessage";
import { getPasswordMismatchErrorMessage } from "../../../../utils/getPasswordMismatchErrorMessage";
import { EMAIL_ALREADY_EXISTS_ERROR_MESSAGE } from "../../../../constants/email";

import { useAuthContext } from "../../../../contexts/AuthContext";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";
import { useForm } from "../../../../hooks/useForm";
import { DynamicForm } from "../../../DynamicForm/DynamicForm";
import { hasFormErrorOccurred } from "../../../../utils/hasFormErrorOccurred";

import * as authService from "../../../../services/authService";

const ButtonTitle = "Sign Up";

export const RegisterForm = () => {
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

    const errorOccurred = hasFormErrorOccurred(updatedValues);

    if (!errorOccurred) {
      const email = values.email.fieldValue;
      const password = values.password.fieldValue;

      const data = { email, password };

      try {
        const result = await authService.register(data);

        await updateAuth(result);

        Object.keys(FORM_KEYS).forEach((key) => {
          INITIAL_FORM_VALUES[FORM_KEYS[key]].errorMessage = "";
        });
      } catch (err) {
        if (err.message === EMAIL_ALREADY_EXISTS_ERROR_MESSAGE) {
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
