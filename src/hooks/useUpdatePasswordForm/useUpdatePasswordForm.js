import { useState } from "react";

import { useForm } from "../useForm";
import { useService } from "../useService";

import { userLoginDetailsServiceFactory } from "../../services/userLoginDetailsService";

import { checkIfFormErrorHasOccurred } from "../../utils/checkIfFormErrorHasOccurred";
import { clearInitialFormValuesMessages } from "../../utils/clearInitialFormValuesMessages";

import { setPasswordMismatchErrorMessage } from "./helpers/setPasswordMismatchErrorMessage";
import { setSuccessMessage } from "./helpers/setSuccessMessage";
import { setWrongPasswordErrorMessage } from "./helpers/setWrongPasswordErrorMessage";
import { removeSuccessMessage } from "./helpers/removeSuccessMessage";
import { getData } from "./helpers/getData";

import {
  INITIAL_FORM_VALUES,
  FORM_KEYS,
} from "../../components/Account/UpdatePasswordForm/initialFormValues";

export const useUpdatePasswordForm = (userId) => {
  const [isLoading, setIsLoading] = useState(false);
  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

  const {
    values,
    setValues,
    updateForm,
    clickHandler,
    blurHandler,
    changeHandler,
    submitHandler,
  } = useForm(INITIAL_FORM_VALUES);

  const onSubmit = async (e) => {
    submitHandler(e);

    let spreadValues = { ...values };

    spreadValues = setPasswordMismatchErrorMessage(
      values,
      spreadValues,
      FORM_KEYS
    );

    setValues(spreadValues);

    const errorOccurred = checkIfFormErrorHasOccurred(values);

    if (!errorOccurred) {
      const data = getData(values);

      try {
        setIsLoading(true);

        await userLoginDetailsService.updatePassword(userId, data);

        spreadValues = setSuccessMessage(spreadValues, FORM_KEYS);

        setValues(spreadValues);

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);
      } catch (err) {
        console.log(err.message);

        spreadValues = setWrongPasswordErrorMessage(
          spreadValues,
          FORM_KEYS,
          err.message
        );

        spreadValues = removeSuccessMessage(spreadValues, FORM_KEYS);

        setValues(spreadValues);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    values,
    setValues,
    updateForm,
    clickHandler,
    blurHandler,
    changeHandler,
    onSubmit,
    isLoading,
  };
};
