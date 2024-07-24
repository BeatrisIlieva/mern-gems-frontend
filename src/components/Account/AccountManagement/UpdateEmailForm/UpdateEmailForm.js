import { useState, useEffect } from "react";

import { useAuthContext } from "../../../../contexts/AuthContext";

import { useForm } from "../../../../hooks/useForm";

import { DynamicForm } from "../../../DynamicForm/DynamicForm";

import { hasFormErrorOccurred } from "../../../../utils/hasFormErrorOccurred";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

import { getUser, updateEmail } from "../../../../services/authService";

import styles from "./UpdateEmailForm.module.css";

const ButtonTitle = "Save";

export const UpdateEmailForm = () => {
  const { userId, token } = useAuthContext();
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

    const errorOccurred = hasFormErrorOccurred(values);

    if (!errorOccurred) {
      const email = values.email.fieldValue;
      const password = values.password.fieldValue;

      const data = { email, password };
      try {

        await updateEmail(userId, data, token);
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
