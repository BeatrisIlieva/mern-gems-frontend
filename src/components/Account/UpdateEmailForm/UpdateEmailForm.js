import { useState, useEffect } from "react";

import { useService } from "../../../hooks/useService";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useForm } from "../../../hooks/useForm";

import { DynamicForm } from "../../DynamicForm/DynamicForm";

import { checkIfFormErrorHasOccurred } from "../../../utils/checkIfFormErrorHasOccurred"; 

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

import { userServiceFactory } from "../../../services/userService";

import styles from "./UpdateEmailForm.module.css";

import { clearInitialFormValuesMessages } from "../../../utils/clearInitialFormValuesMessages";

const ButtonTitle = "Save";

export const UpdateEmailForm = () => {
  const { userId, token } = useAuthenticationContext();
  
  const [userInformation, setUserInformation] = useState([]);

  const userService = useService(userServiceFactory);

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
    userService.getUserLoginDetails(userId)
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

    const errorOccurred = checkIfFormErrorHasOccurred(values);

    if (!errorOccurred) {
      const email = values.email.fieldValue;
      const password = values.password.fieldValue;

      const data = { email, password };
      try {

        await userService.updateEmail(userId, data, token);

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
    </div>
  );
};
