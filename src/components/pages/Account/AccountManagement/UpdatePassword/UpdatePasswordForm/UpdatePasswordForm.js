import { useEffect, useState } from "react";
import { useCallback, useMemo } from "react";

import { DynamicForm } from "../../../../../reusable/DynamicForm/DynamicForm";

import { useLanguageContext } from "../../../../../../contexts/LanguageContext";
import { useAuthenticationContext } from "../../../../../../contexts/AuthenticationContext";

import { useForm } from "../../../../../../hooks/useForm";
import { useService } from "../../../../../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../../../../../services/userLoginDetailsService";

import { checkIfFormErrorHasOccurred } from "../../../../../../utils/checkIfFormErrorHasOccurred";
import { setWrongPasswordErrorMessage } from "../../../../../../utils/setWrongPasswordErrorMessage";

import { getData } from "./helpers/getData";
import { setPasswordMismatchErrorMessage } from "./helpers/setPasswordMismatchErrorMessage";

import { PASSWORD_ERROR_MESSAGE } from "../../../../../../constants/password";
import { SAVE_BUTTON_NAMING } from "../../../../../../constants/languageRelated";
import { INITIAL_FORM_VALUES, FORM_KEYS } from "../constants/initialFormValues";

export const UpdatePasswordForm = () => {
  const { language } = useLanguageContext();

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

  const onSubmit = useCallback(
    async (e) => {
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

          setValues(spreadValues);
        } catch (err) {
          console.log(err.message);

          spreadValues = setWrongPasswordErrorMessage(
            spreadValues,
            FORM_KEYS,
            PASSWORD_ERROR_MESSAGE
          );

          setValues(spreadValues);
        } finally {
          setIsLoading(false);
        }
      }
    },
    [
      submitHandler,
      values,
      userLoginDetailsService,
      popupCloseHandler,
      setValues,
      userId,
    ]
  );

  const buttonTitle = useMemo(() => {
    return SAVE_BUTTON_NAMING[language];
  }, []);

  return (
    <>
      <DynamicForm
        values={values}
        formKeys={FORM_KEYS}
        clickHandler={clickHandler}
        blurHandler={blurHandler}
        changeHandler={changeHandler}
        initialFormValues={INITIAL_FORM_VALUES}
        userInformation={userLoginDetails}
        buttonTitle={buttonTitle}
        onSubmit={onSubmit}
        isLoading={isLoading}
        formVariant={"column-form"}
        fieldVariant={"large-field-box"}
      />
    </>
  );
};
