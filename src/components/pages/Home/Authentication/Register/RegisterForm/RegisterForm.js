import { useCallback, useMemo } from "react";

import { DynamicForm } from "../../../../../reusable/DynamicForm/DynamicForm";

import { useService } from "../../../../../../hooks/useService";
import { useForm } from "../../../../../../hooks/useForm";

import { userLoginDetailsServiceFactory } from "../../../../../../services/userLoginDetailsService";

import { checkIfFormErrorHasOccurred } from "../../../../../../utils/checkIfFormErrorHasOccurred";
import { clearInitialFormValuesMessages } from "../../../../../../utils/clearInitialFormValuesMessages";

import { getData } from "./helpers/getData";
import { setEmailAlreadyExistsErrorMessage } from "./helpers/setEmailAlreadyExistsErrorMessage";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

export const RegisterForm = ({ closeHandler }) => {
  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

  let {
    values,
    setValues,
    clickHandler,
    blurHandler,
    changeHandler,
    submitHandler,
  } = useForm(INITIAL_FORM_VALUES);

  const onSubmit = useCallback(
    async (e) => {
      submitHandler(e);

      const errorOccurred = checkIfFormErrorHasOccurred(values);

      if (!errorOccurred) {
        const data = getData(values);

        try {
          const result = await userLoginDetailsService.register(data);

          clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);

          await closeHandler(result);
        } catch (err) {
          let spreadValues = { ...values };

          spreadValues = setEmailAlreadyExistsErrorMessage(
            spreadValues,
            FORM_KEYS
          );

          setValues(spreadValues);
        }
      } else {
        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);
      }
    },
    [submitHandler, values, closeHandler, userLoginDetailsService, setValues]
  );

  const buttonTitle = useMemo(() => {
    return "Sign Up";
  }, []);

  return (
    <DynamicForm
      values={values}
      formKeys={FORM_KEYS}
      clickHandler={clickHandler}
      blurHandler={blurHandler}
      changeHandler={changeHandler}
      initialFormValues={INITIAL_FORM_VALUES}
      buttonTitle={buttonTitle}
      onSubmit={onSubmit}
      formVariant={"column-form"}
      fieldVariant={"large-field-box"}
    />
  );
};
