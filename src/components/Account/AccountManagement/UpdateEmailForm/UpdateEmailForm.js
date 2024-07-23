import { useState, useEffect } from "react";

import { useAuthContext } from "../../../../contexts/AuthContext";

import { useForm } from "../../../../hooks/useForm";

import { DynamicForm } from "../../../DynamicForm/DynamicForm";

import { hasFormErrorOccurred } from "../../../../utils/hasFormErrorOccurred";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

import { updateEmail } from "../../../../services/authService";

const ButtonTitle = "Save";

export const EmailInformationForm = () => {
  const { userId } = useAuthContext();
  const loginInformationService = useService(loginInformationServiceFactory);
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
    loginInformationService
      .find(userId)
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
        await loginInformationService.updateEmail(userId, data);
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
    // <section className={styles["slideIn"]}>
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
    // </section>
  );
};
