import { useEffect } from "react";

import { useService } from "../../../../hooks/useService";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useForm } from "../../../../hooks/useForm";
import { DynamicForm } from "../../../DynamicForm/DynamicForm";
import { hasFormErrorOccurred } from "../../../../utils/hasFormErrorOccurred";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";
import { EMAIL_ALREADY_EXISTS_ERROR_MESSAGE } from "../../../../constants/email";

import { userServiceFactory } from "../../../../services/userService";

import { clearInitialFormValuesMessages } from "../../../../utils/clearInitialFormValuesMessages";

const ButtonTitle = "Sign Up";

export const RegisterForm = () => {
  const { updateAuthentication } = useAuthenticationContext();

  const userService = useService(userServiceFactory);

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
        const result = await userService.register(data);

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
  );
};
