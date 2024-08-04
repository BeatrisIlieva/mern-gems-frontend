import { useEffect } from "react";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useForm } from "../../../hooks/useForm";

import { DynamicForm } from "../../DynamicForm/DynamicForm";

import { checkIfFormErrorHasOccurred } from "../../../utils/checkIfFormErrorHasOccurred";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

import styles from "./UpdateEmailForm.module.css";

import { clearInitialFormValuesMessages } from "../../../utils/clearInitialFormValuesMessages";

import { useUserLoginDetails } from "../../../hooks/useUserLoginDetails";

const ButtonTitle = "Save";

export const UpdateEmailForm = () => {
  const { userId } = useAuthenticationContext();

  const { userLoginDetails, updateUserEmail } = useUserLoginDetails();

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
    updateForm();
  }, [userLoginDetails]);

  const onSubmit = async (e) => {
    submitHandler(e);

    const errorOccurred = checkIfFormErrorHasOccurred(values);

    if (!errorOccurred) {
      const email = values.email.fieldValue;
      const password = values.password.fieldValue;

      const data = { email, password };
      try {
        await updateUserEmail(data);

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);
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
  };

  return (
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
  );
};
