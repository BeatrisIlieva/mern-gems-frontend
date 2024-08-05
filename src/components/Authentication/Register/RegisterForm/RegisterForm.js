import { useEffect } from "react";

import { useService } from "../../../../hooks/useService";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useForm } from "../../../../hooks/useForm";
import { DynamicForm } from "../../../DynamicForm/DynamicForm";
import { checkIfFormErrorHasOccurred } from "../../../../utils/checkIfFormErrorHasOccurred";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";
import { EMAIL_ALREADY_EXISTS_ERROR_MESSAGE } from "../../../../constants/email";

import { userLoginDetailsServiceFactory } from "../../../../services/userLoginDetailsService";

import { clearInitialFormValuesMessages } from "../../../../utils/clearInitialFormValuesMessages";

import { BUTTON_TITLE } from "./buttonTitle";

export const RegisterForm = () => {
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
  }, []);

  const onSubmit = async (e) => {
    submitHandler(e);

    const updatedValues = { ...values };

    setValues(updatedValues);
    
    updateForm();

    const errorOccurred = checkIfFormErrorHasOccurred(updatedValues);

    if (!errorOccurred) {
      const email = values.email.fieldValue;
      const password = values.password.fieldValue;

      const data = { email, password };

      try {
        const result = await userLoginDetailsService.register(data);

        await updateAuthentication(result);

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);
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
    <DynamicForm
      values={values}
      formKeys={FORM_KEYS}
      clickHandler={clickHandler}
      blurHandler={blurHandler}
      changeHandler={changeHandler}
      initialFormValues={INITIAL_FORM_VALUES}
      buttonTitle={BUTTON_TITLE}
      onSubmit={onSubmit}
    />
  );
};
