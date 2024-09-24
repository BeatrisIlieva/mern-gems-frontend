import { useEffect, useState } from "react";
import { useCallback, useMemo } from "react";

import { DynamicForm } from "../../../../reusable/DynamicForm/DynamicForm";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";
import { useAuthenticationContext } from "../../../../../contexts/AuthenticationContext";

import { useForm } from "../../../../../hooks/useForm";
import { useService } from "../../../../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../../../../services/userLoginDetailsService";

import { checkIfFormErrorHasOccurred } from "../../../../../utils/checkIfFormErrorHasOccurred";
import { setWrongPasswordErrorMessage } from "../../../../../utils/setWrongPasswordErrorMessage";

import { getData } from "./helpers/getData";

import { SAVE_BUTTON_NAMING } from "../../../../../constants/languageRelated";
import { INITIAL_FORM_VALUES, FORM_KEYS } from "./constants/initialFormValues";
import { PASSWORD_ERROR_MESSAGE } from "../../../../../constants/password";

import styles from "./UpdateEmailForm.module.css";

export const UpdateEmailForm = ({ updateUserEmail }) => {
  const { language } = useLanguageContext();

  const [isLoading, setIsLoading] = useState(false);

  const [userLoginDetails, setUserLoginDetails] = useState([]);

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

      const errorOccurred = checkIfFormErrorHasOccurred(values);

      if (!errorOccurred) {
        const data = getData(values);

        try {
          setIsLoading(true);

          await userLoginDetailsService.updateEmail(userId, data);

          updateUserEmail(data.email);
        } catch (err) {
          console.log(err.message);

          let spreadValues = { ...values };

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
    [submitHandler, userLoginDetailsService, values, setValues, userId]
  );

  const buttonTitle = useMemo(() => {
    return SAVE_BUTTON_NAMING[language];
  }, []);

  return (
    <div className={styles["update-email-form"]}>
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
    </div>
  );
};
