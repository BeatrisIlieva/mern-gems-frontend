import { useState, useEffect } from "react";

import { useForm } from "../../../../hooks/useForm";

import { DynamicForm } from "../../../DynamicForm/DynamicForm";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

import { checkIfCardHasExpired } from "./helpers/checkIfCardHasExpired";

import { checkIfFormErrorHasOccurred } from "../../../../utils/checkIfFormErrorHasOccurred";

import { CARD_HAS_EXPIRED_ERROR_MESSAGE } from "../../../../constants/expiryDate";

import { clearInitialFormValuesMessages } from "../../../../utils/clearInitialFormValuesMessages";

import { useService } from "../../../../hooks/useService";

import { userCardDetailsServiceFactory } from "../../../../services/userCardDetailsService";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { getData } from "./helpers/getData";

export const CardDetailsForm = ({ popupCloseHandler }) => {
  const [userCardDetails, setUserCardDetails] = useState([]);

  const userCardDetailsService = useService(userCardDetailsServiceFactory);

  const { userId } = useAuthenticationContext();

  const {
    values,
    setValues,
    clickHandler,
    blurHandler,
    updateForm,
    changeHandler,
    submitHandler,
  } = useForm(INITIAL_FORM_VALUES);

  useEffect(() => {
    userCardDetailsService
      .getOne(userId)
      .then((data) => {
        setUserCardDetails(data);

        updateForm();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userCardDetailsService, userId, updateForm]);

  const onSubmit = async (e) => {
    submitHandler(e);

    const errorOccurred = checkIfFormErrorHasOccurred(values);

    const cardHasExpired = checkIfCardHasExpired(values.expiryDate.fieldValue);

    if (cardHasExpired) {
      setValues((prevValues) => ({
        ...prevValues,
        [FORM_KEYS.ExpiryDate]: {
          ...prevValues[FORM_KEYS.ExpiryDate],
          errorMessage: CARD_HAS_EXPIRED_ERROR_MESSAGE,
        },
      }));

      return;
    }

    if (!errorOccurred) {
      const data = getData(values);

      try {
        await userCardDetailsService.update(userId, data);

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);

        popupCloseHandler();
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <>
      <DynamicForm
        values={values}
        formKeys={FORM_KEYS}
        clickHandler={clickHandler}
        blurHandler={blurHandler}
        changeHandler={changeHandler}
        initialFormValues={INITIAL_FORM_VALUES}
        userInformation={userCardDetails}
        buttonTitle={"Save"}
        onSubmit={onSubmit}
      />
    </>
  );
};
