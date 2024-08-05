import { useEffect, useState } from "react";

import { useForm } from "../../../hooks/useForm";

import { DynamicForm } from "../../DynamicForm/DynamicForm";

import { checkIfFormErrorHasOccurred } from "../../../utils/checkIfFormErrorHasOccurred";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

import styles from "./UpdateEmailForm.module.css";

import { clearInitialFormValuesMessages } from "../../../utils/clearInitialFormValuesMessages";

import { useService } from "../../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../../services/userLoginDetailsService";
import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { LoadingSpinner } from "../../LoadingSpinner/LoadingSpinner";

export const UpdateEmailForm = () => {
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

    const errorOccurred = checkIfFormErrorHasOccurred(values);

    if (!errorOccurred) {
      const newEmail = values.email.fieldValue;
      const password = values.password.fieldValue;

      const data = { email: newEmail, password };

      try {
        setIsLoading(true);

        await userLoginDetailsService.updateEmail(userId, data);

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);

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
      } finally {
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
          buttonTitle={"Save"}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};
