import { useEffect, useState } from "react";

import { DynamicForm } from "../../../../DynamicForm/DynamicForm";
import { LoadingSpinner } from "../../../../LoadingSpinner/LoadingSpinner";

import { useAuthenticationContext } from "../../../../../contexts/AuthenticationContext";

import { useForm } from "../../../../../hooks/useForm";
import { useService } from "../../../../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../../../../services/userLoginDetailsService";

import { checkIfFormErrorHasOccurred } from "../../../../../utils/checkIfFormErrorHasOccurred";
import { clearInitialFormValuesMessages } from "../../../../../utils/clearInitialFormValuesMessages";
import { setWrongPasswordErrorMessage } from "../../../../../utils/setWrongPasswordErrorMessage";

import { getData } from "./helpers/getData";
import { setPasswordMismatchErrorMessage } from "./helpers/setPasswordMismatchErrorMessage";
import { setSuccessMessage } from "./helpers/setSuccessMessage";
import { removeSuccessMessage } from "./helpers/removeSuccessMessage";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

export const UpdatePasswordForm = () => {
  const [userLoginDetails, setUserLoginDetails] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const { userId } = useAuthenticationContext();

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

  useEffect(() => {
    userLoginDetailsService
      .getOne(userId)
      .then((data) => {
        setUserLoginDetails(data);

        updateForm();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userLoginDetailsService, userId, updateForm]);

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

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <DynamicForm
        values={values}
        formKeys={FORM_KEYS}
        clickHandler={clickHandler}
        blurHandler={blurHandler}
        changeHandler={changeHandler}
        initialFormValues={INITIAL_FORM_VALUES}
        userInformation={userLoginDetails}
        buttonTitle={"Save"}
        onSubmit={onSubmit}
      />
    </>
  );
};
