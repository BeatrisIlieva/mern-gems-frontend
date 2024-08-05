import { useEffect, useState } from "react";

import { useForm } from "../../../hooks/useForm";

import { DynamicForm } from "../../DynamicForm/DynamicForm";

import { checkIfFormErrorHasOccurred } from "../../../utils/checkIfFormErrorHasOccurred";

import { getPasswordMismatchErrorMessage } from "../../../utils/getPasswordMismatchErrorMessage";

import { SUCCESS_MESSAGES } from "../../../mappers/successMessages";
import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

import { clearInitialFormValuesMessages } from "../../../utils/clearInitialFormValuesMessages";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";
import { useService } from "../../../hooks/useService";
import { userLoginDetailsServiceFactory } from "../../../services/userLoginDetailsService";
import { LoadingSpinner } from "../../LoadingSpinner/LoadingSpinner";

import styles from "./UpdatePasswordForm.module.css";

const ButtonTitle = "Save";

export const UpdatePasswordForm = () => {
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

  const onSubmit = async (e) => {
    submitHandler(e);

    const updatedValues = { ...values };

    if (
      updatedValues[FORM_KEYS.NewPassword].errorMessage === "" ||
      updatedValues[FORM_KEYS.RetypeNewPassword].errorMessage === ""
    ) {
      const passwordErrorMessage = getPasswordMismatchErrorMessage(
        values[FORM_KEYS.NewPassword].fieldValue,
        values[FORM_KEYS.RetypeNewPassword].fieldValue
      );

      updatedValues[FORM_KEYS.NewPassword].errorMessage = passwordErrorMessage;
      updatedValues[FORM_KEYS.RetypeNewPassword].errorMessage =
        passwordErrorMessage;
    }

    setValues(updatedValues);
    updateForm();

    const errorOccurred = checkIfFormErrorHasOccurred(values);

    if (!errorOccurred) {
      const password = values.password.fieldValue;
      const newPassword = values.newPassword.fieldValue;

      const data = { password, newPassword };

      try {
        setIsLoading(true);

        await userLoginDetailsService.updatePassword(userId, data);

        setValues((prevValues) => ({
          ...prevValues,
          [FORM_KEYS.NewPassword]: {
            ...prevValues[FORM_KEYS.NewPassword],
            successMessage: SUCCESS_MESSAGES.newPassword,
          },
        }));

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);

        updateForm();

        setIsLoading(false);
      } catch (err) {
        console.log(err.message);

        setValues((prevValues) => ({
          ...prevValues,
          [FORM_KEYS.Password]: {
            ...prevValues[FORM_KEYS.Password],
            errorMessage: err.message,
          },
          [FORM_KEYS.NewPassword]: {
            ...prevValues[FORM_KEYS.NewPassword],
            successMessage: "",
          },
        }));

        updateForm();

        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className={styles["slideIn"]}>
        <DynamicForm
          values={values}
          formKeys={FORM_KEYS}
          clickHandler={clickHandler}
          blurHandler={blurHandler}
          changeHandler={changeHandler}
          initialFormValues={INITIAL_FORM_VALUES}
          userInformation={userLoginDetails}
          buttonTitle={ButtonTitle}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};
