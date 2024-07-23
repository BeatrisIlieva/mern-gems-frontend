import { useState, useEffect } from "react";

import { useAuthContext } from "../../../../contexts/AuthContext";

import { useForm } from "../../../../hooks/useForm";

import { DynamicForm } from "../../../DynamicForm/DynamicForm";

import { getUser, updatePassword } from "../../../../services/authService";

import { hasFormErrorOccurred } from "../../../../utils/hasFormErrorOccurred";

import { getPasswordMismatchErrorMessage } from "../../../../utils/getPasswordMismatchErrorMessage";

import { SUCCESS_MESSAGES } from "../../../../mappers/successMessages";
import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

const ButtonTitle = "Save";

export const UpdatePasswordForm = () => {
  const { userId } = useAuthContext();

  const [userInformation, setUserInformation] = useState([]);

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
    getUser(userId)
      .then((data) => {
        setUserInformation(data);
        updateForm();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userInformation]);

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

    const errorOccurred = hasFormErrorOccurred(values);

    if (!errorOccurred) {
      const password = values.password.fieldValue;
      const newPassword = values.newPassword.fieldValue;

      const data = { password, newPassword };
      try {
        await updatePassword(userId, data);

        setValues((prevValues) => ({
          ...prevValues,
          [FORM_KEYS.NewPassword]: {
            ...prevValues[FORM_KEYS.NewPassword],
            successMessage: SUCCESS_MESSAGES.newPassword,
          },
        }));

        updateForm();
      } catch (err) {
        console.log(err.message);

        setValues((prevValues) => ({
          ...prevValues,
          [FORM_KEYS.Password]: {
            ...prevValues[FORM_KEYS.Password],
            errorMessage: err.message,
          },
        }));

        updateForm();
      }
    }
    values[FORM_KEYS.NewPassword].successMessage = "";
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
        userInformation={userInformation}
        buttonTitle={ButtonTitle}
      />
    </form>
  );
};
