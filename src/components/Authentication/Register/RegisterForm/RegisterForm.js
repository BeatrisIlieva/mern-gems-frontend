import { useService } from "../../../../hooks/useService";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useForm } from "../../../../hooks/useForm";
import { DynamicForm } from "../../../DynamicForm/DynamicForm";
import { checkIfFormErrorHasOccurred } from "../../../../utils/checkIfFormErrorHasOccurred";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

import { userLoginDetailsServiceFactory } from "../../../../services/userLoginDetailsService";

import { clearInitialFormValuesMessages } from "../../../../utils/clearInitialFormValuesMessages";

import { getData } from "./helpers/getData";

import { setEmailAlreadyExistsErrorMessage } from "./helpers/setEmailAlreadyExistsErrorMessage";

export const RegisterForm = () => {
  const { updateAuthentication } = useAuthenticationContext();

  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

  let {
    values,
    setValues,
    clickHandler,
    blurHandler,
    changeHandler,
    submitHandler,
  } = useForm(INITIAL_FORM_VALUES);

  const onSubmit = async (e) => {
    submitHandler(e);

    const errorOccurred = checkIfFormErrorHasOccurred(values);

    if (!errorOccurred) {
      const data = getData(values);

      try {
        const result = await userLoginDetailsService.register(data);

        await updateAuthentication(result);

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);
      } catch (err) {
        let spreadValues = { ...values };

        spreadValues = setEmailAlreadyExistsErrorMessage(
          spreadValues,
          FORM_KEYS
        );

        setValues(spreadValues);
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
      buttonTitle={"Sign Up"}
      onSubmit={onSubmit}
    />
  );
};
