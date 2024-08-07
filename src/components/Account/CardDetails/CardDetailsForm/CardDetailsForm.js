import { useState, useEffect } from "react";

import { DynamicForm } from "../../../DynamicForm/DynamicForm";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useForm } from "../../../../hooks/useForm";
import { useService } from "../../../../hooks/useService";

import { userCardDetailsServiceFactory } from "../../../../services/userCardDetailsService";

import { checkIfFormErrorHasOccurred } from "../../../../utils/checkIfFormErrorHasOccurred";
import { clearInitialFormValuesMessages } from "../../../../utils/clearInitialFormValuesMessages";
import { setCardHasExpiredErrorMessage } from "../../../../utils/setCardHasExpiredErrorMessage";
import { getCardDetailsFormData } from "../../../../utils/getCardDetailsFormData";
import { checkIfCardHasExpired } from "../../../../utils/checkIfCardHasExpired";

import { INITIAL_FORM_VALUES, FORM_KEYS } from "./initialFormValues";

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
      let spreadValues = { ...values };

      spreadValues = setCardHasExpiredErrorMessage(spreadValues, FORM_KEYS);

      setValues(spreadValues);

      return;
    }

    if (!errorOccurred) {
      const data = getCardDetailsFormData(values);

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
