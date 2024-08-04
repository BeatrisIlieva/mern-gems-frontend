import { useEffect } from "react";

import { useService } from "../../../../hooks/useService";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { DynamicForm } from "../../../DynamicForm/DynamicForm";

import { useForm } from "../../../../hooks/useForm";

import { checkIfFormErrorHasOccurred } from "../../../../utils/checkIfFormErrorHasOccurred";

import { INVALID_CREDENTIALS_ERROR_MESSAGE } from "../../../../constants/email";
import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

import { userLoginDetailsServiceFactory } from "../../../../services/userLoginDetailsService";

import { clearInitialFormValuesMessages } from "../../../../utils/clearInitialFormValuesMessages";

const ButtonTitle = "Sign In";

export const LoginForm = () => {
  const { updateAuthentication } = useAuthenticationContext();

  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

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
  }, [updateForm]);

  const onSubmit = async (e) => {
    submitHandler(e);

    const updatedValues = { ...values };
    setValues(updatedValues);

    updateForm();

    const errorOccurred = checkIfFormErrorHasOccurred(values);

    if (!errorOccurred) {
      const email = values.email.fieldValue;
      const password = values.password.fieldValue;

      const data = { email, password };

      try {
        const result = await userLoginDetailsService.login(data);

        await updateAuthentication(result);

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);
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
    <DynamicForm
      values={values}
      formKeys={FORM_KEYS}
      clickHandler={clickHandler}
      blurHandler={blurHandler}
      changeHandler={changeHandler}
      initialFormValues={INITIAL_FORM_VALUES}
      buttonTitle={ButtonTitle}
      onSubmit={onSubmit}
    />
  );
};
